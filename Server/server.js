// Load environment variables from .env file
const dotenv = require("dotenv").config();

// Import express for server creation
const express = require("express");

// Import custom error handling middleware
const { errorHandler } = require("./middleware/errorHandler");

// Node.js path module for handling file and directory paths
const path = require("path");

// Create an Express application instance
const app = express();

// Import database connection function
const connectDB = require("./config/db");

// Import user routes
const userRoutes = require("./routes/userRoutes");

// Import cookie parser middleware to parse cookies in requests
const cookieParser = require("cookie-parser");

// Set the server port from environment variable or default to 5000
const port = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Middleware to parse incoming JSON requests to JavaScript objects
app.use(express.json());

// Setup API routes for user-related endpoints
app.use("/api/users", userRoutes);

// Serve frontend static files in production mode
if (process.env.NODE_ENV === "production") {
  // Path to the React build folder
  const publicPath = path.join(__dirname, "build");

  // Absolute path to index.html of React build
  const filePath = path.resolve(__dirname, "build", "index.html");

  // Serve static files from React build
  app.use(express.static(publicPath));

  // Handle any route that doesn't match an API route by sending React's index.html
  app.get("*", (req, res) => {
    res.sendFile(filePath);
  });
}

// Use custom error handling middleware at the end of middleware stack
app.use(errorHandler);

// Start server and listen on specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
