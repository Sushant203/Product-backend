const express = require("express");
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController.js");
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
module.exports = router;
