import express from "express";
const router = express.Router();
import { createReview, getAllReviews, getReviewById, updateReview, deleteReview } from "../controller/reviewController.js";

// Create Review
router.post("/reviews", createReview);

// Get all Reviews
router.get("/reviews", getAllReviews);

// Get Review by ID
router.get("/reviews/:id", getReviewById);

// Update Review
router.put("/reviews/:id", updateReview);

// Delete Review
router.delete("/reviews/:id", deleteReview);

export default router;