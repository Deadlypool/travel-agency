import Booking from "../model/bookingModel.js";

// Create Booking
const createBooking = async (req, res) => {
    try {
        const { userId, packageId, bookingDate, numberOfPeople, status, paymentId } = req.body;
        const newBooking = new Booking({ userId, packageId, bookingDate, numberOfPeople, status, paymentId });
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("userId").populate("packageId").populate("paymentId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Booking by ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate("userId").populate("packageId").populate("paymentId");
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Booking
const updateBooking = async (req, res) => {
    try {
        const { userId, packageId, bookingDate, numberOfPeople, status, paymentId } = req.body;
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, { userId, packageId, bookingDate, numberOfPeople, status, paymentId }, { new: true });
        if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Booking
const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking };