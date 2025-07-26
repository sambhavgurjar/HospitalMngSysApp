const patientService = require("../services/patient.service.js");
const asyncHandler = require("../utils/asyncHandler.js");

// Create a new patient
exports.createPatient = asyncHandler(async (req, res) => {
  const patientData = req.body;
  const result = await patientService.createPatient(patientData);
  res.status(201).json(result);
});


// Get all patients
exports.getAllPatients = asyncHandler(async (req, res) => {             
  const result = await patientService.getAllPatients();
  res.status(200).json(result);
});     

// Get a patient by pid
exports.getPatientByPid = asyncHandler(async (req, res) => {
  const patientPid = req.params.pid;
  const result = await patientService.getPatientByPid(patientPid);
  res.status(200).json(result);
}); 
// Get a patient by ID
exports.getPatientById = asyncHandler(async (req, res) => {
  const patientId = req.params.id;
  const result = await patientService.getPatientById(patientId);
  res.status(200).json(result);
}); 

// Delete a patient by ID
exports.deletePatientById = asyncHandler(async (req, res) => {
  const patientId = req.params.id;
  const result = await patientService.deletePatientById(patientId);
  res.status(200).json(result);
});