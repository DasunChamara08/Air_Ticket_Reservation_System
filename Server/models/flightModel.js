// flightModel.js

import mongoose from 'mongoose';

// Define the Flight schema with required fields
const flightSchema = mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
    },
    departureTime: {
      type: String, // You can also use Date if it's full datetime
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
    date: {
      type: String, // You can also use Date type
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    flyingHours: {
      type: String,
      required: true,
    },
    specialNews: {
      type: String,
      default: '', // Optional field for delay or cancellation announcements
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Flight model from the schema
export const Flight = mongoose.model('Flight', flightSchema);
