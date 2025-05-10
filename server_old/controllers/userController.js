// Import necessary modules
const User = require("../models/userModel");  // Import User model
const bcrypt = require("bcryptjs");  // Import bcrypt for password hashing
const jwt = require("jsonwebtoken");  // Import jsonwebtoken for creating JWT tokens

// Get all users
const getUsers = async (req, res, next) => {
  try {
    // Fetch users from the database
    const users = await User.find();
    if (!users) {
      res.status(400);
      throw new Error("users not found");  // If no users are found, throw an error
    }

    return res.status(200).json(users);  // Send the users as a response
  } catch (error) {
    next(error);  // Pass the error to the error handler
  }
};

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;  // Destructure password and rest of the body

    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);  // Hash the password

    // Create a new user in the database
    const user = await User.create({
      ...rest,
      password: hashedPassword,
    });

    if (!user) {
      res.status(400);
      throw new Error("user not created");  // If user creation fails, throw an error
    }

    // Remove password from the response and return the user details
    const { password: userPassword, ...otherDetails } = user._doc;

    return res.status(201).json(otherDetails);  // Send the created user details
  } catch (error) {
    next(error);  // Pass the error to the error handler
  }
};

// Login a user
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;  // Get email and password from request body

    // Find the user in the database by email
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("user not found");  // If user is not found, throw an error
    }

    // Compare the provided password with the hashed password in the database
    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      res.status(400);
      throw new Error("incorrect password");  // If passwords don't match, throw an error
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("jwt", token);  // Set the JWT token in a cookie

    // Remove password from the response and return the user details
    const { password: userPassword, ...rest } = user._doc;
    return res.status(200).json({ ...rest });
  } catch (error) {
    next(error);  // Pass the error to the error handler
  }
};

// Logout a user
const logoutUser = async (req, res, next) => {
  // Remove the JWT token cookie
  res.cookie("jwt", " ", { expiresIn: "-1" });
  return res.json({ message: "you have been logged out" });  // Send a logout message
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
};
