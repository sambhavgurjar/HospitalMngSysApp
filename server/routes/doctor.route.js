const doctorController = require("../controllers/doctor.controller");
const express = require("express");
const router = express.Router();
const fileHandler = require("../utils/fileHandler.js");

// Create a new doctor
router.post("/", fileHandler("doctors").single("profilePic"), doctorController.createDoctor);

// Get all doctors
router.get("/", doctorController.getAllDoctors);

// Get doctor by doctorid
router.get("/doctor/:doctorid", doctorController.getDoctorBydoctorid);


// Get doctor image by filename
router.get("/image/:profilePic", doctorController.getDoctorImage);
// Get doctor by ID
router.get("/:id", doctorController.getDoctorById);

// Update doctor by ID
router.put("/:id", doctorController.updateDoctorById);

// Delete doctor by ID
router.delete("/:id", doctorController.deleteDoctorById);

module.exports = router;
