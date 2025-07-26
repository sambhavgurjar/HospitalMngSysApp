const mongoose = require("mongoose");

const departSchema = new mongoose.Schema(
  {
    departid: {
      type: Number,
      required: [true, "Department ID is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Department name is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
    },

    hod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      default: null,
    },
    email: {
      type: String,
      match: [/\S+@\S+\.\S+/, "Invalid email address"],
      lowercase: true,
      trim: true,
    },
    contact: {
      type: String,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      enum:[true, false],
      default: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Depart = mongoose.model("Depart", departSchema);
module.exports = Depart;
