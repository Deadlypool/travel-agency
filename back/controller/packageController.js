import Package from "../model/packageModel.js";

// Create Package
const createPackage = async (req, res) => {
    try {
        const { title, description, price, duration, destinations, categoryId, images } = req.body;
        const newPackage = new Package({ title, description, price, duration, destinations, categoryId, images });
        const savedPackage = await newPackage.save();
        res.status(201).json(savedPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Packages
const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find().populate('categoryId');
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Package by ID
const getPackageById = async (req, res) => {
    try {
        const singlePackage = await Package.findById(req.params.id).populate('categoryId');
        if (!singlePackage) return res.status(404).json({ message: "Package not found" });
        res.status(200).json(singlePackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Package
const updatePackage = async (req, res) => {
    try {
        const { title, description, price, duration, destinations, categoryId, images } = req.body;
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, { title, description, price, duration, destinations, categoryId, images }, { new: true });
        if (!updatedPackage) return res.status(404).json({ message: "Package not found" });
        res.status(200).json(updatedPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Package
const deletePackage = async (req, res) => {
    try {
        const deletedPackage = await Package.findByIdAndDelete(req.params.id);
        if (!deletedPackage) return res.status(404).json({ message: "Package not found" });
        res.status(200).json({ message: "Package deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createPackage, getAllPackages, getPackageById, updatePackage, deletePackage };