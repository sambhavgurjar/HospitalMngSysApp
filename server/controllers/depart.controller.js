const departService = require("../services/depart.service.js");
const asyncHandler = require("../utils/asyncHandler.js");
const path = require("path");
const fs = require("fs");

// Create a new department
exports.createDepart = asyncHandler(async (req, res) => {
  req.body.image = req.file ? req.file?.filename : null; // Handle file upload
  const result = await departService.createDepart(req.body);
  res.status(201).json(result);
});

// Get all departments
exports.getAllDeparts = asyncHandler(async (req, res) => {
  const result = await departService.getAllDeparts();
  res.status(200).json(result);
});

// Get a department by departid
exports.getDepartByDepartid = asyncHandler(async (req, res) => {
  const { departid } = req.params;
  const result = await departService.getDepartByDepartid(departid);
  res.status(200).json(result);
});

// Get a department by ID
exports.getDepartById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await departService.getDepartById(id);
  res.status(200).json(result);
});

// Get a department image by filename
exports.getDepartImage = asyncHandler(async (req, res) => {
  const filename = req.params.image;
  let path = path.join(__dirname, "../uploads/departments", filename);
  if (fs.existsSync(path)) {
    res.status(200).sendFile(path);
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});

// Update a department by ID

exports.updateDepart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await departService.updateDepart(id, req.body);
  res.status(200).json(result);
});

// Delete a department by ID
exports.deleteDepart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await departService.deleteDepart(id);
  res.status(200).json(result);
});
