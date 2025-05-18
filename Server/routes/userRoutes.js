// userRoutes.js (in /routes folder)
const express = require("express");
const router = express.Router(); // MUST define router!

const userController = require("../controllers/userController"); // make sure path is correct

// Get all users (example route, optional)
router.get("/", userController.getUsers);

// Register a new user
router.post("/register", userController.createUser);

// Login user
router.post("/login", userController.loginUser);

// Logout user
router.get("/logout", userController.logoutUser);

module.exports = router;
