const Patient = require("../models/patient.model.js");
const AppError = require("../utils/AppError.js");
const bcrypt = require("bcryptjs");

// create a new patient

exports.createPatient = async (patientData) => {
  try {
    // console.log("Creating patient with data:", patientData);
    
    const existingEmail = await Patient.findOne({ email: patientData.email });
    if (existingEmail) {
      throw new AppError("Email already exists", 400);
    }
    const existingUserId = await Patient.findOne({ userid: patientData.userid });
    if (existingUserId) {
      throw new AppError("User ID already exists", 400);
    }
    const existingContact = await Patient.findOne({ contact: patientData.contact });
    if (existingContact) {
      throw new AppError("Contact number already exists", 400);
    }
    // Hash the password before saving
    const hashedPass = await bcrypt.hash(patientData.password, 10);
    patientData.password = hashedPass;
    
    //generate a new patient ID
    let newPid = await Patient.findOne().sort({ pid: -1 });
    newPid ? (newPid = newPid.pid + 1) : (newPid = 1);
    patientData.pid = newPid;
    const patient = await Patient.create(patientData);

    return { message: "Patient created successfully" };
  } catch (error) {
    // console.log("Error creating patient:", error.message);

    throw new AppError(error?.message || "Error creating patient", 500);
  }
};

// get all patients

exports.getAllPatients = async () => {
  try {
    const patients = await Patient.find();
    return { data: patients, message: "Patients fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching patients", 500);
  }
};

// get a patient by ID
exports.getPatientById = async (id) => {
  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      throw new AppError("Patient not found", 404);
    }
    return { data: patient, message: "Patient fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching patient", 500);
  }
};
// get a patient by ID
exports.getPatientByPid = async (pid) => {
  try {
    const patient = await Patient.findOne({ pid: pid });
    
    return { data: patient, message: "Patient fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching patient", 500);
  }
};

//delete a patient by ID
exports.deletePatientById = async (id) => {
  try {
    const patient = await Patient.findByIdAndDelete(id);
    if (!patient) {
      throw new AppError("Patient not found", 404);
    }
    return { message: "Patient deleted successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error deleting patient", 500);
  }
};
