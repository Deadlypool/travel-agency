import Review from "../model/reviewModel.js";

// Create Review
const createReview = async (req, res) => {
    try {
        const { userId, packageId, rating, comment } = req.body;
        const newReview = new Review({ userId, packageId, rating, comment });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate("userId").populate("packageId");
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Review by ID
const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate("userId").populate("packageId");
        if (!review) return res.status(404).json({ message: "Review not found" });
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Review
const updateReview = async (req, res) => {
    try {
        const { userId, packageId, rating, comment } = req.body;
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, { userId, packageId, rating, comment }, { new: true });
        if (!updatedReview) return res.status(404).json({ message: "Review not found" });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Review
const deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ message: "Review not found" });
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createReview, getAllReviews, getReviewById, updateReview, deleteReview };