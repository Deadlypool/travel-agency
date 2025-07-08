import express from "express";
const router = express.Router();
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controller/categoryController.js";

// Create Category
router.post("/categories", createCategory);

// Get all Categories
router.get("/categories", getAllCategories);

// Get Category by ID
router.get("/categories/:id", getCategoryById);

// Update Category
router.put("/categories/:id", updateCategory);

// Delete Category
router.delete("/categories/:id", deleteCategory);

export default router;