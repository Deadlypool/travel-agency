import Payment from "../model/paymentModel.js";

// Create Payment
const createPayment = async (req, res) => {
    try {
        const { bookingId, amount, paymentDate, method, status } = req.body;
        const newPayment = new Payment({ bookingId, amount, paymentDate, method, status });
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Payments
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate("bookingId");
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Payment by ID
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate("bookingId");
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Payment
const updatePayment = async (req, res) => {
    try {
        const { bookingId, amount, paymentDate, method, status } = req.body;
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, { bookingId, amount, paymentDate, method, status }, { new: true });
        if (!updatedPayment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Payment
const deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment };