import express from "express";
const router = express.Router();
import { createNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification } from "../controller/notificationController.js";

// Create Notification
router.post("/notifications", createNotification);

// Get all Notifications
router.get("/notifications", getAllNotifications);

// Get Notification by ID
router.get("/notifications/:id", getNotificationById);

// Update Notification
router.put("/notifications/:id", updateNotification);

// Delete Notification
router.delete("/notifications/:id", deleteNotification);

export default router;