import express from "express";
import { getProfile, adminPanel, managerPanel } from "../controllers/userController.js";
import { authenticateUser, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 📌 Public Route (Any logged-in user)
router.get("/profile", authenticateUser, getProfile);

// 📌 Admin-Only Route
router.get("/admin", authenticateUser, authorizeRoles("admin"), adminPanel);

// 📌 Manager-Only Route
router.get("/manager", authenticateUser, authorizeRoles("manager"), managerPanel);

export default router;
