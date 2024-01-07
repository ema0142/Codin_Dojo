const Product = require("../models/product.model");

// READ ALL
exports.getAllProducts = (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
};

// READ ONE BY ID
exports.findProductById = (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
};

// CREATE
exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.status(201).json(newProduct);
        })
        .catch((err) => res.status(400).json({ error: err.message }));
};

// UPDATE
exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((updatedProduct) => {
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(updatedProduct);
        })
        .catch((err) => res.status(400).json({ error: err.message }));
};

// DELETE
exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json({ message: "Product deleted successfully" });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
};
