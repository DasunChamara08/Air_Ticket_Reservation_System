//flightController
const Flight = require("../models/flightModel");
// @desc    Get all flights , @route   GET /api/flights
// @access  Public

const getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();

    if (!flights || flights.length === 0) {
      res.status(404);
      throw new Error("No flights found");
    }

    return res.status(200).json(flights);
  } catch (error) {
    next(error); // send to error-handling middleware
  }
};

// @desc    Create a new flight
// @route   POST /api/flights
// @access  Admin
const createFlight = async (req, res, next) => {
  try {
    // TODO: Add validation with Joi or other library
    
    const flight = await Flight.create(req.body);

    if (!flight) {
      res.status(400);
      throw new Error("Failed to create flight");
    }

    return res.status(201).json(flight);
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single flight by ID
// @route   GET /api/flights/:id
// @access  Public
const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      res.status(404);
      throw new Error("Flight not found");
    }

    return res.status(200).json(flight);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a flight by ID
// @route   PUT /api/flights/:id
// @access  Admin
const updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return updated flight
    );

    if (!updatedFlight) {
      res.status(400);
      throw new Error("Failed to update flight");
    }

    return res.status(200).json(updatedFlight);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a flight
// @route   DELETE /api/flights/:id
// @access  Admin
const deleteFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);

    if (!flight) {
      res.status(404);
      throw new Error("Flight not found or already deleted");
    }

    return res.status(200).json({ message: "Flight deleted", id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFlights,
  createFlight,
  getFlight,
  updateFlight,
  deleteFlight,
};
