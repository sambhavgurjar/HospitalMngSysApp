const Appointment = require("../models/appoint.model");
const AppError = require("../utils/AppError");

// Create appointment
exports.createAppoint = async (data) => {
  try {
      // Generate  appointid
      console.log(data);
      
    let lastAppoint = await Appointment.findOne().sort({ appointid: -1 });
    const newId = lastAppoint ? lastAppoint.appointid + 1 : 1;

    await Appointment.create({ ...data, appointid: newId });

    return { message: "Appointment created successfully" };
  } catch (err) {
    throw new AppError(err?.message || "Failed to create appointment", 500);
  }
};

// Get all appointments
exports.getAllAppoints = async () => {
  try {
    const appoints = await Appointment.find()
      .populate("doctor")
      .populate("patient");
    return {data:appoints,message:"Appointments fetch successfully"};
  } catch (err) {
    throw new AppError(err?.message || "Failed to fetch appointments", 500);
  }
};

// Get appointment by ID
exports.getAppointById = async (id) => {
  try {
    const appoint = await Appointment.findById(id)
      .populate("doctor")
      .populate("patient");
    if (!appoint) throw new AppError("Appointment not found", 404);
     return { data: appoint, message: "Appointment fetch successfully" };
  } catch (err) {
    throw new AppError(err?.message || "Failed to fetch appointment", 500);
  }
};
// Get appointment by patient

exports.getAppointByPatientId = async (id) => {
  try {
    const appoint = await Appointment.find({patient:id})
      .populate("doctor")
      .populate("patient");
    if (!appoint) throw new AppError("Appointment not found", 404);
     return { data: appoint, message: "Appointment fetch successfully" };
  } catch (err) {
    throw new AppError(err?.message || "Failed to fetch appointment", 500);
  }
};
// Get appointment by doctor

exports.getAppointByDoctorId = async (id) => {
  try {
    const appoint = await Appointment.find({doctor:id})
      .populate("doctor")
      .populate("patient");
    if (!appoint) throw new AppError("Appointment not found", 404);
     return { data: appoint, message: "Appointment fetch successfully" };
  } catch (err) {
    throw new AppError(err?.message || "Failed to fetch appointment", 500);
  }
};

// Update appointment by ID
exports.updateAppoint = async (id, data) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new AppError("Appointment not found", 404);
    return { message: "Appointment updated successfully", data:updated };
  } catch (err) {
    throw new AppError(err?.message || "Failed to update appointment", 500);
  }
};

// Delete appointment by ID
exports.deleteAppoint = async (id) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) throw new AppError("Appointment not found", 404);
    return { message: "Appointment deleted successfully" };
  } catch (err) {
    throw new AppError(err?.message || "Failed to delete appointment", 500);
  }
};
