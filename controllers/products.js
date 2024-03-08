const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const data = await Product.find({});
  res.status(200).json({ data });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.find({});

  res.status(200).json({ data });
};

module.exports = { getAllProducts, getAllProductsTesting };
