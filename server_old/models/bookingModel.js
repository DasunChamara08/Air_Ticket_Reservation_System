const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // User Information - Refers to the user who made the booking
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Reference to the User model (who made the booking)
      required: true,
    },

    // Flight Information - Refers to the flight being booked
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",  // Reference to the Flight model
      required: true,
    },

    // Full Name of the Passenger(s) making the booking
    passengerName: {
      type: String,
      required: true,
    },

    // Contact Email of the passenger
    email: {
      type: String,
      required: true,
      match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please enter a valid email address"],
    },

    // Phone number of the passenger (optional but useful for contact)
    phoneNumber: {
      type: String,
      required: false,
    },

    // Total number of passengers for the booking
    passengerCount: {
      type: Number,
      required: true,
      min: [1, "At least one passenger is required"],
    },

    // Departure Date and Time of the flight
    departureDate: {
      type: Date,
      required: true,
    },

    // Return Date and Time (only for round-trip bookings)
    returnDate: {
      type: Date,
      required: false,  // Optional, can be added only for round trips
    },

    // Flight Class (Economy, Business, First Class)
    flightClass: {
      type: String,
      enum: ["Economy", "Business", "First Class"],  // Enum restricts values to these options
      required: true,
    },

    // Seat Assignment - Can store specific seat or class-based seat allocation
    seatAssignment: {
      type: String, // Example: "12A", "5B", or "Business"
      required: false,
    },

    // Total price of the booking
    totalAmount: {
      type: Number,
      required: true,
      min: [0, "Amount must be a positive value"],  // Ensuring non-negative amount
    },

    // Payment Status - True if the payment is confirmed
    paymentStatus: {
      type: Boolean,
      default: false,  // False by default, indicating payment is pending
    },

    // Booking Confirmation - Whether the booking is confirmed or not
    confirmed: {
      type: Boolean,
      default: false,  // Default is false until payment and confirmation are done
    },

    // Special Requests (e.g., dietary needs, extra luggage, etc.)
    specialRequests: {
      type: String,
      required: false,
    },

    // Additional information regarding the booking
    bookingNotes: {
      type: String,
      required: false,
    },

  },
  {
    // Automatically add timestamps for created and updated date
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
