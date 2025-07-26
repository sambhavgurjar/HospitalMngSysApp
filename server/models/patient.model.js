const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
    pid:{ type: Number, required: true, unique: true },
  name: { type: String, required: true, minlength: 3, maxlength: 20 },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  email: { type: String, required: true, unique: true, match: /\S+@\S+\.+\S+/ },
  contact: { type: String, required: true, match: /^\d{10}$/ },
  address: { type: String, required: true, minlength: 10, maxlength: 50 },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Patient", PatientSchema);
