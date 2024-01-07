const Product = require("../models/manager.model");

// READ ALL
module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID
module.exports.findOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    })
    .catch((err) => res.json(err));
};

// CREATE
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE
module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(updatedProduct);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(result);
    })
    .catch((err) => res.json(err));
};
