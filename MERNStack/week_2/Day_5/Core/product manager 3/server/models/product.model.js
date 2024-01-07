// Import the mongoose library
const mongoose = require("mongoose");

// Create a product schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive value"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description must be at least 10 characters"],
    },
}, { timestamps: true });

// Create a Product model
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
