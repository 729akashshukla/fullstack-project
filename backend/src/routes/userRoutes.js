import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, getAllUsers); // Only authenticated users can access
router.get("/admin", isAdmin, getAllUsers); // Only admin can access

export default router;















// import express from "express";
// import { getProfile, adminPanel, managerPanel } from "../controllers/userController.js";
// import { authenticateUser, authorizeRoles } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // 📌 Public Route (Any logged-in user)
// router.get("/profile", authenticateUser, getProfile);

// // 📌 Admin-Only Route
// router.get("/admin", authenticateUser, authorizeRoles("admin"), adminPanel);

// // 📌 Manager-Only Route
// router.get("/manager", authenticateUser, authorizeRoles("manager"), managerPanel);

// export default router;
