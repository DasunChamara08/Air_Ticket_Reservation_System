const Booking = require("../models/bookingModel");

// Get all bookings
const getBookings = async (req, res, next) => {
  try {
    // Fetch all bookings with populated flight and user details
    const bookings = await Booking.find().populate("flightId").populate("userId");
    
    if (!bookings) {
      res.status(400);
      throw new Error("Cannot find bookings");
    }

    return res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Create a new booking
const createBooking = async (req, res, next) => {
  try {
    // Create a booking using data from the request body
    const booking = await Booking.create(req.body);
    
    if (!booking) {
      res.status(400);
      throw new Error("Cannot create booking");
    }

    return res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

// Update an existing booking
const updateBooking = async (req, res, next) => {
  try {
    // Update the booking based on the provided ID
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return the updated booking
    );

    if (!updatedBooking) {
      res.status(400);
      throw new Error("Cannot update booking");
    }

    return res.status(200).json(updatedBooking);
  } catch (error) {
    next(error);
  }
};

// Delete a booking
const deleteBooking = async (req, res, next) => {
  try {
    // Delete the booking based on the provided ID
    const booking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!booking) {
      res.status(400);
      throw new Error("Cannot delete booking");
    }

    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

// Get a single booking by ID
const getBooking = async (req, res, next) => {
  try {
    // Fetch a single booking by ID with populated flight and user details
    const booking = await Booking.findById(req.params.id).populate("flightId").populate("userId");
    
    if (!booking) {
      res.status(400);
      throw new Error("Booking not found");
    }

    return res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  getBooking,
};
