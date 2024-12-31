const mongoose = require("mongoose");

const Category = mongoose.Schema({
  categoryName: String,
});

module.exports = mongoose.model("Category", Category);
