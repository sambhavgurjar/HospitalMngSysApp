const express = require("express");
const app = express();
const cors = require("cors");

const patientRoutes = require("./routes/patient.route.js");
const departRoutes = require("./routes/depart.route.js");
const doctorRoutes = require("./routes/doctor.route.js");
const loginRoutes = require("./routes/login.route.js");
const appointRoutes = require("./routes/appoint.route.js");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//req check

app.use((req, res, next) => {
  console.log("check");
  next();
})



//  routes
app.use("/api/departments", departRoutes);  
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/appointments", appointRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
