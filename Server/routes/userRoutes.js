// userRoutes.js
const express = require("express");            // ✅ Import express
const router = express.Router();               // ✅ Use Express's Router

const userController = require("../controllers/userController"); // ✅ Your correct path

// Define routes
router.get("/", userController.getUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

module.exports = router;
