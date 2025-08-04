const express = require("express");
const router = express.Router();
const appointContro = require("../controllers/appoint.controller");

//create new appoint
router.post("/", appointContro.createAppoint);

//get all appoint
router.get("/", appointContro.getAllAppoints);



//get appoint by patient id

router.get("/patient/:id", appointContro.getAppointByPatientId);

//get appoint by doctor id

router.get("/doctor/:id", appointContro.getAppointByDoctorId);

//get appoint by appoint mongo id
router.get("/:id", appointContro.getAppointById);

//update appoint
router.put("/:id", appointContro.updateAppoint);

//delete appoint

router.delete("/:id", appointContro.deleteAppoint);

module.exports = router;