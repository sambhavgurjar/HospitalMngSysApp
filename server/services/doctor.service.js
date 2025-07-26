const Doctor = require("../models/doctor.model.js");
const AppError = require("../utils/AppError.js");

//create a new doctor
exports.createDoctor = async (doctorData) => {
  try {
    let existingEmail = await Doctor.findOne({ email: doctorData.email });
    if (existingEmail) {
      throw new AppError("Email already exists", 400);
    }
    let newId = await Doctor.findOne().sort({ doctorid: -1 });
    doctorData.doctorid = newId ? newId.doctorid + 1 : 1;
    await Doctor.create(doctorData);
    return { message: "Doctor created successfully" };
  } catch (error) {
    throw new AppError("Error creating doctor", 500);
  }
};

//get all doctors
exports.getAllDoctors = async () => {
  try {
    const doctors = await Doctor.find().populate("depart", "name");
    return { data: doctors, message: "Doctors fetched successfully" };
  } catch (error) {
    throw new AppError("Error fetching doctors", 500);
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
    throw new AppError("Error fetching doctor", 500);
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
    throw new AppError("Error fetching doctor", 500);
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
    throw new AppError("Error updating doctor", 500);
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
    throw new AppError("Error deleting doctor", 500);
  }
};
