const Product = require('../server/models/Product');


exports.createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newProduct = await Product.create({ title, description, price });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
