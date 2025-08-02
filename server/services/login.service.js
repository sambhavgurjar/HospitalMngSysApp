const Patient = require("../models/patient.model");
const AppError = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const Doctor = require("../models/doctor.model");

//login
exports.login = async (userData) => {
  try {
    const { userid, password, role } = userData;
    if (role === "patient") {
      // Check if user exists
      const patient = await Patient.findOne({ userid });
      if (!patient) {
        throw new AppError("User not found", 404);
      }
      // Validate password
      const isMatch = await bcrypt.compare(password, patient.password);
      if (!isMatch) {
        throw new AppError("Invalid credentials", 401);
      }
      return { data: patient, message: "Login successful" };
    }

    // Check if user exists
    if (role === "doctor") {
      const doctor = await Doctor.findOne({ userid });
      if (!doctor) {
        throw new AppError("User not found", 404);
      }
      // Validate password
      const isMatch = await bcrypt.compare(password, doctor.password);
      if (!isMatch) {
        throw new AppError("Invalid credentials", 401);
      }
      return { data: doctor, message: "Login successful" };
    }

    if (role === "admin") {
      // Admin login logic can be added here
      // For now, we will just return a success message
      return { message: "Admin login successful" };
    }
    throw new AppError("Invalid role", 400);
  } catch (error) {
    throw new AppError(error?.message || "Login failed", 500);
  }
};
