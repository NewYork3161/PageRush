// models/PublisherInventory.js

const mongoose = require("mongoose");

// ===== Publisher Inventory Schema =====
const PublisherInventorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "publisher_inventory" }
);

// ===== Export Model =====
module.exports = mongoose.model("PublisherInventory", PublisherInventorySchema);
