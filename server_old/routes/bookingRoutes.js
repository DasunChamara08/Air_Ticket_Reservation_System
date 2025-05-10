// Importing Router from Express
const { Router } = require("express");

// Importing middleware for user authentication
const { auth } = require("../middleware/authMiddleware");

// Importing controller functions for booking management
const {
  getAllBookings,      // Fetch all bookings for the authenticated user
  createBooking,       // Create a new flight booking
  updateBooking,       // Update existing booking details
  deleteBooking,       // Delete a specific booking
  getSingleBooking     // Get a specific booking by ID
} = require("../controllers/bookingController");

// Creating a new Express router instance
const router = Router();

/**
 * @route   GET /api/bookings
 * @desc    Get all bookings for the authenticated user
 * @access  Private (requires login)
 */
router.get("/", auth, getAllBookings);

/**
 * @route   GET /api/bookings/:id
 * @desc    Get details of a single booking by its ID
 * @access  Public (optional: restrict access based on use-case)
 */
router.get("/:id", getSingleBooking);

/**
 * @route   POST /api/bookings
 * @desc    Create a new booking (flight reservation)
 * @access  Public (or Private, if only logged-in users can book)
 */
router.post("/", createBooking);

/**
 * @route   PUT /api/bookings/:id
 * @desc    Update an existing booking (e.g., change seat, flight)
 * @access  Private (only authenticated users can update)
 */
router.put("/:id", auth, updateBooking);

/**
 * @route   DELETE /api/bookings/:id
 * @desc    Cancel or delete a booking
 * @access  Private (only authenticated users can delete)
 */
router.delete("/:id", auth, deleteBooking);

// Export the router to be used in the main server file
module.exports = router;
