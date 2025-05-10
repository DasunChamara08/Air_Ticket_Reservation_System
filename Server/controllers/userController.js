// userController.js

const { find, create, findOne } = require("../models/userModel");
const { genSalt, hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const { email, password, ...rest } = req.body;

    // Check if user already exists
    const existingUser = await findOne({ email });
    if (existingUser) {
      res.status(400);
      throw new Error("User already exists");
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await create({
      ...rest,
      email,
      password: hashedPassword,
    });

    if (!user) {
      res.status(400);
      throw new Error("User creation failed");
    }

    const { password: userPassword, ...otherDetails } = user._doc;
    return res.status(201).json(otherDetails);
  } catch (error) {
    next({ message: error.message || "Something went wrong" });
  }
};
