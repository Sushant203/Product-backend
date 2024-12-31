const mongoose = require("mongoose");

const Product = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    count: Number,
    review: Number,
  },
});

module.exports = mongoose.model("Product", Product);
