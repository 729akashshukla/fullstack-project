import bcrypt from "bcryptjs";
import User from "../models/User.js";

// 📌 Register User
export const register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();

    res.json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user" });
  }
};

// 📌 Login User (Session-based)
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Save session data
    req.session.user = { id: user._id, role: user.role };
    res.json({ success: true, message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Login error" });
  }
};

// 📌 Logout User
export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid"); // Clear session cookie
    res.json({ success: true, message: "Logged out successfully" });
  });
};
