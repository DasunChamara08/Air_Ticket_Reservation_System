// Import user model functions
const { findOne, create } = require("../models/userModel");

// Import bcryptjs for password hashing
const { genSalt, hash } = require("bcryptjs");

// Controller to create a new user
const createUser = async (req, res) => {
  try {
    // Extract email and password from request body, and the rest of fields in 'rest'
    const { email, password, ...rest } = req.body;

    // Check if user with given email already exists
    const existingUser = await findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate salt and hash password for security
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // Create new user document in database with hashed password
    const user = await create({
      ...rest,
      email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(400).json({ message: "User creation failed" });
    }

    // Remove password field from user object before sending response
    const { password: _, ...userWithoutPassword } = user._doc;

    // Respond with the created user info (excluding password)
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    // Return server error message
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

module.exports = {
  createUser,
  // Add other user controller functions like login, logout here...
};
