// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const userRoutes = require("./routes/userRoutes.js");
// require("dotenv").config();

// const app = express();

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/myapp", {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // frontend origin (React)
//   credentials: true, // allow cookies to be sent
// }));
// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/users", userRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const userRoutes = require("./routes/userRoutes.js");
// const flightRoutes = require("./routes/flightRoutes.js"); // ✅ Import flight routes
// require("dotenv").config();

// const app = express();

// // ✅ MongoDB connection
// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/flightBooking")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // frontend origin (React)
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // ✅ API Routes
// app.use("/api/users", userRoutes);
// app.use("/api/flights", flightRoutes); // ✅ Add flight route

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes.js");
const flightRoutes = require("./routes/flightRoutes.js"); // Flight routes including checkout session
require("dotenv").config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/flightBooking")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend origin (React)
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes); // Use flight routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
