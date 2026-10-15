
const express = require("express");

const testRoutes = require("./routes/testRoutes");
const studentRoutes = require("./routes/studentRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(express.json());

// Request logging middleware
app.use(requestLogger);

// API routes
app.use("/api", testRoutes);
app.use("/api/students", studentRoutes);

module.exports = app;
