// ===============================================
// routes/userSignup.js
// Handles all sign-up page routes for PageRush
// ===============================================

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // Ensure Mongoose is available here
const UserAccount = require("../models/UserAccount"); // <-- connected schema

// Just to confirm mongoose connection (optional, for debugging)
if (mongoose.connection.readyState === 1) {
  console.log("🟢 Mongoose is connected to MongoDB Atlas (via userSignup.js)");
} else {
  console.log("🟠 Mongoose not yet connected (handled in app.js)");
}

// ====== GET /signup ======
// Render the signup form page
router.get("/signup", (req, res) => {
  res.render("signup", { title: "PageRush | Sign Up" });
});

// ====== POST /signup ======
// Handles signup form submission and saves user data to MongoDB
router.post("/signup", async (req, res) => {
  try {
    const { FName, LName, email, password, address, city, state, zipCode } = req.body;

    // ✅ Basic validation
    if (!email || !password || !FName || !LName) {
      console.log("⚠️ Missing required fields:", req.body);
      return res.status(400).send("⚠️ Please fill in all required fields.");
    }

    // ✅ Check for existing user
    const existingUser = await UserAccount.findOne({ email });
    if (existingUser) {
      console.log("⚠️ Attempt to register existing email:", email);
      return res.status(400).send("⚠️ This email is already registered.");
    }

    // ✅ Create new user (using your schema)
    const newUser = new UserAccount({
      FName,
      LName,
      email,
      password, // ⚠️ Plaintext — you can hash with bcrypt later
      address,
      city,
      state,
      zipCode,
    });

    // ✅ Save to MongoDB
    await newUser.save();
    console.log("✅ New user successfully saved to MongoDB:", newUser.email);

    // ✅ Render thank-you / verification page after signup
    res.render("signup_verification", { title: "Thank You | PageRush" });

  } catch (err) {
    console.error("❌ Error saving user:", err);
    res.status(500).send("An error occurred while creating your account.");
  }
});

module.exports = router;
