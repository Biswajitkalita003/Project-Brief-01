
const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/testRoutes");
const studentRoutes = require("./routes/studentRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// Allow requests from React frontend
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

// Request logging middleware
app.use(requestLogger);

// API routes
app.use("/api", testRoutes);
app.use("/api/students", studentRoutes);

module.exports = app;
