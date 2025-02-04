export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
};

export const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") return next();
  res.status(403).json({ message: "Forbidden - Admins only" });
};











// // 📌 Middleware to Authenticate Session
// export const authenticateUser = (req, res, next) => {
//   if (!req.session.user) return res.status(401).json({ message: "Access Denied" });
//   next();
// };

// // 📌 Middleware to Authorize Roles
// export const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.session.user.role)) {
//       return res.status(403).json({ message: "Unauthorized Access" });
//     }
//     next();
//   };
// };
