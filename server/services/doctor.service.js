const Doctor = require("../models/doctor.model.js");
const AppError = require("../utils/AppError.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//create a new doctor
exports.createDoctor = async (doctorData) => {
  try {
    let existingEmail = await Doctor.findOne({ email: doctorData.email });
    if (existingEmail) {
      throw new AppError("Email already exists", 400);
    }
    let existingUserId = await Doctor.findOne({ userid: doctorData.userid });
    if (existingUserId) {
      throw new AppError("User ID already exists", 400);
    }
    let existingContact = await Doctor.findOne({ contact: doctorData.contact });
    if (existingContact) {
      throw new AppError("Contact number already exists", 400);
    }
    // Hash the password before saving
    const hashedPass = await bcrypt.hash(doctorData.password, 10);
    doctorData.password = hashedPass;
    //generate a new doctor ID
    let newId = await Doctor.findOne().sort({ doctorid: -1 });
    doctorData.doctorid = newId ? newId.doctorid + 1 : 1;
    await Doctor.create(doctorData);
    return { message: "Doctor created successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error creating doctor", 500);
  }
};

//get all doctors
exports.getAllDoctors = async () => {
  try {
    const doctors = await Doctor.find().populate("depart", "name");
    return { data: doctors, message: "Doctors fetched successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error fetching doctors", 500);
  }
};

//get doctor by doctorid
exports.getDoctorBydoctorid = async (doctorId) => {
  try {
    const doctor = await Doctor.findOne({ doctorid: doctorId }).populate(
      "depart",
      "name"
    );
    if (!doctor) {
      throw new AppError("Doctor not found", 404);
    }
    return { data: doctor, message: "Doctor fetched successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error fetching doctor", 500);
  }
};

//get doctor by id
exports.getDoctorById = async (id) => {
  try {
    const doctor = await Doctor.findById(id).populate("depart", "name");
    if (!doctor) {
      throw new AppError("Doctor not found", 404);
    }
    return { data: doctor, message: "Doctor fetched successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error fetching doctor", 500);
  }
};

//update doctor by id
exports.updateDoctorById = async (id, updateData) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate("depart", "name");
    if (!doctor) {
      throw new AppError("Doctor not found", 404);
    }
    return { data: doctor, message: "Doctor updated successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error updating doctor", 500);
  }
};
//delete doctor by id
exports.deleteDoctorById = async (id) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      throw new AppError("Doctor not found", 404);
    }
    return { message: "Doctor deleted successfully" };
  } catch (error) {
    throw new AppError( error?.message || "Error deleting doctor", 500);
  }
};
