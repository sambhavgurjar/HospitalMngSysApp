const departController = require("../controllers/depart.controller.js");
const express = require("express");
const router = express.Router();
const fileHandler = require("../utils/fileHandler.js");
// Create a new department
router.post(
  "/",
  fileHandler("departments").single("file"),
  departController.createDepart
);

// Get all departments
router.get("/", departController.getAllDeparts);

// Get a department by departid
router.get("/department/:departid", departController.getDepartByDepartid);

// Get a department image by filename
router.get("/image/:image", departController.getDepartImage);

// Get a department by ID
router.get("/:id", departController.getDepartById);

// Update a department by ID
router.put("/:id", departController.updateDepart);

// Delete a department by ID
router.delete("/:id", departController.deleteDepart);

module.exports = router;
