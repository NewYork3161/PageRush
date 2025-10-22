// ===============================================
// PageRush - Full Express App Configuration
// ===============================================
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ====== MongoDB Connection ======
const MONGO_URI = "mongodb+srv://root:d4OYsSyHqLrwnZHv@cluster0.mmhyyv3.mongodb.net/PageRushDB?retryWrites=true&w=majority&appName=Cluster0";


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ====== Middleware ======
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// ====== Import and Mount Routes ======
const userSignupRoutes = require("./routes/userSignup");
app.use("/", userSignupRoutes);

// ====== Routes ======

// Home Route - renders the main page
app.get("/", (req, res) => {
  res.render("home", { title: "PageRush | Home" });
});

// Example route placeholder
app.get("/about", (req, res) => {
  res.send("<h1>About PageRush</h1><p>This is a placeholder route.</p>");
});

// ====== 404 Fallback ======
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1><p>The page you requested does not exist.</p>");
});

// ====== Start Server ======
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
