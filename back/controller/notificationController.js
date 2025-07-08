import Notification from "../model/notificationModel.js";

// Create Notification
const createNotification = async (req, res) => {
    try {
        const { userId, message, read } = req.body;
        const newNotification = new Notification({ userId, message, read });
        const savedNotification = await newNotification.save();
        res.status(201).json(savedNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Notifications
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().populate("userId");
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Notification by ID
const getNotificationById = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id).populate("userId");
        if (!notification) return res.status(404).json({ message: "Notification not found" });
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Notification
const updateNotification = async (req, res) => {
    try {
        const { userId, message, read } = req.body;
        const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, { userId, message, read }, { new: true });
        if (!updatedNotification) return res.status(404).json({ message: "Notification not found" });
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Notification
const deleteNotification = async (req, res) => {
    try {
        const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
        if (!deletedNotification) return res.status(404).json({ message: "Notification not found" });
        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification };