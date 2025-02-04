
import express from "express";
import passport from "passport";
import { loginSuccess, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/dashboard"); // Redirect to frontend
  }
);

router.get("/me", loginSuccess);
router.post("/logout", logout);

export default router;



























// import express from "express";
// import passport from "passport";

// const router = express.Router();

// // 📌 Redirect user to Google OAuth login
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// // 📌 Handle OAuth callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     req.session.user = { id: req.user._id, role: req.user.role };
//     res.redirect("/dashboard"); // Redirect to frontend dashboard
//   }
// );

// // 📌 Logout user
// router.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.clearCookie("connect.sid");
//     res.redirect("/");
//   });
// });

// export default router;
