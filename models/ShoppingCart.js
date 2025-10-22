// models/ShoppingCart.js

const mongoose = require("mongoose");

// ===== Shopping Cart Schema =====
const ShoppingCartSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // you can change to ObjectId later when user auth is added
      required: true,
    },
    items: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "PublisherInventory",
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "shopping_cart" }
);

// ===== Export Model =====
module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema);
