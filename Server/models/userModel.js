const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields if needed
}, {
  timestamps: true,
});

// Create user model
const User = mongoose.model("User", userSchema);

// Export model functions you use in controller
module.exports = {
  findOne: (query) => User.findOne(query),
  create: (data) => User.create(data),
  // Add other methods if needed
};
