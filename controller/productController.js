const Product = require("../model/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { title, price, description, category, rating } = req.body;
    const productModel = new Product({
      title,
      price,
      description,
      category,
      rating,
    });
    //saving the oroduct model in the Db
    const result = await productModel.save();
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

//get product data

exports.getProduct = async (req, res) => {
  try {
    const result = await Product.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

//update product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id, "product id");

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: "product cannot be updated" });
    }
    res.status(200).json({
      message: "product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

//deleting the product by id
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json("cannot delete the product");
    }
    res.status(200).json("product deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
