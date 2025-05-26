// userRoutes.js
const express = require("express");            // ✅ Import express
const router = express.Router();               // ✅ Use Express's Router

//const userController = require("../controllers/userController.js"); // ✅ Your correct path

const userController = require("../controllers/userController");


// Define routes
router.get("/", userController.getUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

// console.log("userController loaded:", userController);

module.exports = router;


// const express = require("express");
// const router = express.Router();

// const userController = require("../controllers/userController.js"); // Fix this path too

// // Routes
// router.get("/", userController.getUsers);
// router.post("/register", userController.createUser);
// router.post("/login", userController.loginUser);
// router.get("/logout", userController.logoutUser);

// module.exports = router;