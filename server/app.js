const express = require("express");
const app = express();
const cors = require("cors");
const patientRoutes = require("./routes/patient.route.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  routes
app.use("/api/patients", patientRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
