const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PatientSchema = new Schema(
  {
    pid: { type: Number, required: true, unique: true },
    userid: { type: String, required: true, unique: true },
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    password: { type: String, required: true, minlength: 6 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /\S+@\S+\.+\S+/,
      lowercase: true,
      trim: true,
    },
    contact: { type: String, required: true, unique: true, match: /^\d{10}$/ },
    address: { type: String, required: true, minlength: 10, maxlength: 50 },
    role: {
      type: String,
      default: "patient",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Patient", PatientSchema);
