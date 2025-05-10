// flightRoutes.js
const { Router } = require("express");
const {
  getFlights,
  createFlight,
  getFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/flightController");
const { auth } = require("../middleware/authMiddleware");

const router = Router();

// Get all flights
router.get("/", getFlights);

// Create a new flight (admin only)
router.post("/", auth, createFlight);

// Get a single flight by ID
router.get("/:id", getFlight);

// Update flight information (admin only)
router.put("/:id", auth, updateFlight);

// Delete a flight (admin only)
router.delete("/:id", auth, deleteFlight);

module.exports = router;
