const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  airline: { type: String, required: true },
  time: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model('Flight', flightSchema);
