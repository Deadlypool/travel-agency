import express from "express";
const router = express.Router();
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from "../controller/bookingController.js";

// Create Booking
router.post("/bookings", createBooking);

// Get all Bookings
router.get("/bookings", getAllBookings);

// Get Booking by ID
router.get("/bookings/:id", getBookingById);

// Update Booking
router.put("/bookings/:id", updateBooking);

// Delete Booking
router.delete("/bookings/:id", deleteBooking);

export default router;