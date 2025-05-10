const mongoose = require("mongoose");

// Define schema for individual seat in a flight
const seatSchema = new mongoose.Schema({
  seatNumber: String, // e.g., "12A"
  isBooked: {
    type: Boolean,
    default: false,
  },
  bookedDates: [Date], // dates this seat is booked for (can help with recurring flights)
});

// Define schema for the flight
const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: [seatSchema], // Embedded list of seats
  image: [String], // e.g., images of aircraft or airline logos
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
