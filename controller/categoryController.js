const Category = require("../model/categoryModel");

exports.createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const categoryModel = new Category({
      categoryName,
    });
    const result = await categoryModel.save();
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const result = await Category.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  try {
    // const updateCategoryModel = new Category({
    //   categoryName,
    // });
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body);
    if (!updatedCategory) {
      return res.status(404).json({ message: "category not updated" });
    }
    res.status(200).json({
      message: "category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.log("error found", error);
  }
};

//delete category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      res.status(404).json({ message: "cannot delte the data" });
    }
    res.status(200).json({ message: "category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
