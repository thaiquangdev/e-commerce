import { categories } from "../Data.js";
import categoryModel from "../models/category.model.js";
import expressAsyncHandler from "express-async-handler";

// @desc import all categories
// @route POST /api/categpries/import
// @access Private/Admin

const importCategories = expressAsyncHandler(async (req, res) => {
  try {
    // remove all categories
    await categoryModel.deleteMany({});
    // insert all categories
    const createdCategories = await categoryModel.insertMany(categories);
    res.status(201).json({ createdCategories });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc get all categories
// @route GET /api/categories
// @route Public

const getCategories = expressAsyncHandler(async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.status(201).json({ categories });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc create new category
// @route POST /api/categories
// @access Private/admin

const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { name, image } = req.body;
    // find if category exist
    const existCategory = await categoryModel.findOne({ name });
    if (existCategory) {
      res.status(400).json({ message: "Category already exist" });
    } else {
      const categories = await categoryModel.create({ name, image });
      res.status(201).json({ categories });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc update a category
// @route PUT /api/categories/:id
// @access Private/Admin
const updateCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { name, image } = req.body;
    const category = await categoryModel.findById(req.params.id);
    if (category) {
      category.name = name || category.name;
      category.image = image || category.name;
      // save category
      const updateCategory = await category.save();
      // send response
      res.status(201).json({ updateCategory });
    } else {
      res.status(400).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc delete a category
// @route DELETE /api/categories/:id
// @access Private/Admin

const deleteCategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (category) {
      res.status(201).json({ message: "Category remove" });
    } else {
      res.status(400).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  importCategories,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
