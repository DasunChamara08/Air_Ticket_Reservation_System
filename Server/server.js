// Import necessary modules
const dotenv = require("dotenv").config();  // Load environment variables
const express = require("express");  // Import express
const { errorHandler } = require("./middleware/errorHandler");  // Import custom error handler
const path = require("path");  // Import path module for handling file paths
const app = express();  // Create an express app
const connectDB = require("./config/db");  // Import database connection function
const userRoutes = require("./routes/userRoutes");  // Import user routes
const cookieParser = require("cookie-parser");  // Import cookie parser middleware

const port = process.env.PORT || 5000;  // Set the port from environment variables or default to 5000

// Connect to the database
connectDB();

// Setup middleware
app.use(cookieParser());  // Use cookie parser middleware
app.use(express.json());  // Parse incoming JSON requests

// Setup routes
// app.use("/api/rooms", roomRoutes);  // Define routes for rooms
app.use("/api/users", userRoutes);  // Define routes for users

// Setup production environment
if (process.env.NODE_ENV === "production") {
  const publicpath = path.join(__dirname, ".", "build");  // Set up the path to static files
  const filePath = path.resolve(__dirname, ".", "build", "index.html");  // Resolve the path to the index.html
  app.use(express.static(publicpath));  // Serve static files

  // Handle all other routes to serve the index.html
  app.get("*", (req, res) => {
    return res.sendFile(filePath);
  });
}

// Use custom error handler
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`listening on port ${port}`));
