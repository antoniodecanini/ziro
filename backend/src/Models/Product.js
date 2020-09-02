const mongoose = require("mongoose");

const Connection = require("../config/connection");

const ProductSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  inCart: { type: Boolean, required: true, default: false },
  createdA: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
