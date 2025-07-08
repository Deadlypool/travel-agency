import Category from "../model/categoryModel.js";

// Create Category
const createCategory = async (req, res) => {
    try {
        const { name, description, icon } = req.body;
        const newCategory = new Category({ name, description, icon });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Category by ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Category
const updateCategory = async (req, res) => {
    try {
        const { name, description, icon } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name, description, icon }, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Category
const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };