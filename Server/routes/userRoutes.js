const express = require("express");
const router = express.Router();

// Import user controller functions
const userController = require("../controllers/userController");

// POST /api/users/register - Create a new user
router.post("/register", userController.createUser);

// You can add more user routes here, e.g., login, logout, profile

module.exports = router;
