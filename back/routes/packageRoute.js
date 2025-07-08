import express from "express";
const router = express.Router();
import { createPackage, getAllPackages, getPackageById, updatePackage, deletePackage } from "../controller/packageController.js";

// Create Package
router.post("/packages", createPackage);

// Get all Packages
router.get("/packages", getAllPackages);

// Get Package by ID
router.get("/packages/:id", getPackageById);

// Update Package
router.put("/packages/:id", updatePackage);

// Delete Package
router.delete("/packages/:id", deletePackage);

export default router;