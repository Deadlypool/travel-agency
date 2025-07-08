import express from "express";
const router = express.Router();
import { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment } from "../controller/paymentController.js";

// Create Payment
router.post("/payments", createPayment);

// Get all Payments
router.get("/payments", getAllPayments);

// Get Payment by ID
router.get("/payments/:id", getPaymentById);

// Update Payment
router.put("/payments/:id", updatePayment);

// Delete Payment
router.delete("/payments/:id", deletePayment);

export default router;