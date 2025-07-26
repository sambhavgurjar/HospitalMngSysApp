const path = require("path");
const fs = require("fs");
const doctorService = require("../services/doctor.service");
const asyncHandler = require("../utils/asyncHandler.js");
// Create a new doctor
exports.createDoctor = asyncHandler(async (req, res) => {
  req.body.profilePic = req?.file ? req.file?.filename : null; // Handle file upload
  const doctorData = req.body;
  const result = await doctorService.createDoctor(doctorData);
  res.status(201).json(result);
});

// Get all doctors
exports.getAllDoctors = asyncHandler(async (req, res) => {
  const result = await doctorService.getAllDoctors();
  res.status(200).json(result);
});

// Get doctor by doctorid
exports.getDoctorBydoctorid = asyncHandler(async (req, res) => {
  const doctorId = req.params.doctorid;
  const result = await doctorService.getDoctorBydoctorid(doctorId);
  res.status(200).json(result);
});

// Get doctor by ID
exports.getDoctorById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await doctorService.getDoctorById(id);
  res.status(200).json(result);
});

// Update doctor by ID
exports.updateDoctorById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await doctorService.updateDoctorById(id, updateData);
  res.status(200).json(result);
});


//get image by ID

exports.getDoctorImage = asyncHandler(async (req, res) => {
    const filename = req.params.profilePic;
    let path = path.join(__dirname, "../uploads/doctors", filename);
    if (fs.existsSync(path)) {
        res.status(200).sendFile(path);
    } else {
        res.status(404).json({ message: "Image not found" });
    }

});

// Delete doctor by ID
exports.deleteDoctorById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await doctorService.deleteDoctorById(id);
  res.status(200).json(result);
});
