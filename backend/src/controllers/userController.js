export const getProfile = (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.session.user });
  };
  
  export const adminPanel = (req, res) => {
    res.json({ message: "Welcome Admin!" });
  };
  
  export const managerPanel = (req, res) => {
    res.json({ message: "Welcome Manager!" });
  };
  