import express from "express";
const router = express.Router();
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controller/userController.js";

// Create User
router.post("/users", createUser);

// Get all Users
router.get("/users", getAllUsers);

// Get User by ID
router.get("/users/:id", getUserById);

// Update User
router.put("/users/:id", updateUser);

// Delete User
router.delete("/users/:id", deleteUser);

export default router;