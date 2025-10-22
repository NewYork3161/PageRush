// models/UserAccount.js

const mongoose = require("mongoose");

// ===== User Account Schema =====
const UserAccountSchema = new mongoose.Schema(
  {
    FName: {
      type: String,
      required: true,
      trim: true,
    },
    LName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // can adjust later
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      trim: true,
      default: "",
    },
    state: {
      type: String,
      trim: true,
      default: "",
    },
    zipCode: {
      type: String,
      trim: true,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "user_accounts" }
);

// ===== Export Model =====
module.exports = mongoose.model("UserAccount", UserAccountSchema);
