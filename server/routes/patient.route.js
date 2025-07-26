const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller.js");

// Create a new patient
router.post("/", patientController.createPatient);

// Get all patients
router.get("/", patientController.getAllPatients);

// Get a patient by ID
router.get("/:id", patientController.getPatientById);
// Get a patient by pid
router.get("/patient/:pid", patientController.getPatientByPid);

// Delete a patient by ID
router.delete("/:id", patientController.deletePatientById);
module.exports = router;