const Depart = require("../models/depart.model.js");
const AppError = require("../utils/AppError.js");

// create a new department
exports.createDepart = async (departData) => {
  try {
    const existingDepart = await Depart.findOne({
      name: departData.name.toLowerCase(),
    });
    if (existingDepart) {
      throw new AppError("Department with this name already exists", 400);
    }
    let newId = await Depart.findOne().sort({ departid: -1 });
    newId = newId ? newId.departid + 1 : 1;
    departData.departid = newId;
    await Depart.create(departData);
    return { message: "Department created successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error creating department", 500);
  }
};
// get all departments
exports.getAllDeparts = async () => {
  try {
    const departs = await Depart.find().populate("hod").sort({ departid: 1 });
    return { data: departs, message: "Departments fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching departments", 500);
  }
}
// get a department by departid
exports.getDepartByDepartid = async (departid) => {
  try {
    const depart = await Depart.findOne({ departid });
    if (!depart) {
      throw new AppError("Department not found", 404);
    }
    return { data: depart, message: "Department fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching department", 500);
  }
};

// get a department by ID

exports.getDepartById = async (id) => {
  try {
    const depart = await Depart.findById(id);
    if (!depart) {
      throw new AppError("Department not found", 404);
    }
    return { data: depart, message: "Department fetched successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error fetching department", 500);
  }
};

// update a department by departid
exports.updateDepart = async (id, updateData) => {
  try {
    const depart = await Depart.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!depart) {
      throw new AppError("Department not found", 404);
    }
    return { data: depart, message: "Department updated successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error updating department", 500);
  }
};

// delete a department by ID
exports.deleteDepart = async (id) => {
  try {
    const depart = await Depart.findByIdAndDelete(id);
    if (!depart) {
      throw new AppError("Department not found", 404);
    }
    return { message: "Department deleted successfully" };
  } catch (error) {
    throw new AppError(error?.message || "Error deleting department", 500);
  }
};