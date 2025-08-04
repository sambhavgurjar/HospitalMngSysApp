const appointService = require("../services/appoint.service");
const asyncHandler = require("../utils/asyncHandler");

// Create Appointment
exports.createAppoint = asyncHandler(async (req, res) => {
  const response = await appointService.createAppoint(req.data);
  res.status(200).json(response);
});

// Get All Appointments
exports.getAllAppoints = asyncHandler(async (req, res) => {
  const appointments = await appointService.getAllAppoints();
  res.status(200).json(appointments);
});

// Get Appointment by appoint mongoID
exports.getAppointById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const appointment = await appointService.getAppointById(id);
  res.status(200).json(appointment);
});
// Get Appointment by patient
exports.getAppointByPatientId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const appointment = await appointService.getAppointByPatientId(id);
  res.status(200).json(appointment);
});
// Get Appointment by appoint mongoID
exports.getAppointByDoctorId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const appointment = await appointService.getAppointByDoctorId(id);
  res.status(200).json(appointment);
});

//  Update Appointment
exports.updateAppoint = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await appointService.updateAppoint(id, req.body);
  res.status(200).json(response);
});

// Delete Appointment
exports.deleteAppoint = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await appointService.deleteAppoint(id);
  res.status(200).json(response);
});
