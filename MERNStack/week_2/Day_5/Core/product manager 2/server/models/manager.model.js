const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Product name must be at least 3 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a non-negative value"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters"],
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
