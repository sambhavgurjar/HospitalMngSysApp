const doctorController = require("../controllers/doctor.controller");
const express = require("express");
const router = express.Router();

// Create a new doctor
router.post("/", doctorController.createDoctor);

// Get all doctors
router.get("/", doctorController.getAllDoctors);

// Get doctor by doctorid
router.get("/doctor/:doctorid", doctorController.getDoctorBydoctorid);

// Get doctor by ID
router.get("/:id", doctorController.getDoctorById);

// Update doctor by ID
router.put("/:id", doctorController.updateDoctorById);

// Delete doctor by ID
router.delete("/:id", doctorController.deleteDoctorById);

module.exports = router;
