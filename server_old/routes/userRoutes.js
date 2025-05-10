const { Router } = require("express");  // Import Router from express
const {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");  // Import controller functions
const { auth } = require("../middleware/authMiddleware");  // Import authentication middleware

const router = Router();  // Create a new router

// Get all users (protected route)
router.get("/", auth, getUsers);

// Create a new user
router.post("/", createUser);

// Login a user
router.post("/login", loginUser);

// Logout a user
router.get("/logout", logoutUser);

module.exports = router;  // Export the router
