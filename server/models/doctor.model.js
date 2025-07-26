const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    doctorid: {
      type: Number,
      required: true,
      unique: true,
    },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
    lowercase: true,
  },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: Date, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Invalid email"],
  },
  contact: {
    type: String,
    required: true,
    match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 50,
  },
  depart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Depart",
    required: true,
  },
  qualifications: { type: [String], default: [] },
  experience: { type: Number, required: true, min: 0 },
  availableDays: { type: [String], default: [] },
  availableTime: {
    start: { type: String },
    end: { type: String },
  },
  isActive: { type: Boolean, default: true },
  joiningDate: { type: Date },
  profilePic: { type: String, default: null },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
