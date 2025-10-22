import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// --- Multer Setup for image uploads ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// --- MongoDB Connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Routes ---
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {
  res.render("index", { title: "Books R Us API Demo" });
});

// Image Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
  res.send(`Image uploaded successfully: ${req.file.filename}`);
});

// --- Start Server ---
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
