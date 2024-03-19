// product api
import { products } from "../Data.js";
import productModel from "../models/product.model.js";
import expressAsyncHandler from "express-async-handler";

// @desc import products
// @route POST /api/products/import
// @access Private/Admin

const importProducts = expressAsyncHandler(async (req, res) => {
  try {
    // delete all product
    await productModel.deleteMany();
    // insert all product
    const createProduct = await productModel.insertMany(products);
    res.status(201).json(createProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc create product
// @route POSt /api/products
// @access Private/admin

const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      thumb,
      images,
      colors,
      tags,
      category,
      salesOffer,
      internal,
      ram,
    } = req.body;
    const product = new productModel({
      title,
      price,
      description,
      thumb,
      images,
      colors,
      tags,
      category,
      salesOffer,
      internal,
      ram,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc get all products
// @route GET/api/products
// @access Public

const getProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { category, search, internal } = req.body;
    const pageSize = 10;
    const pageNumber = Number(req.query.pageNumber) || 1;

    // filter by tag
    const internalFilter = internal ? { internal: { $in: internal } } : {};

    // search by title
    const title = search ? { title: { $regex: search, $option: "i" } } : {};

    // filter by category
    const categoryFilter = category ? { category } : {};

    // count table product
    const count = await productModel.countDocuments({
      ...title,
      ...categoryFilter,
      ...internalFilter,
    });

    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc get product by id
// @route GET /api/products/:id
// @access public

const getProductById = expressAsyncHandler(async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// export all products
export { importProducts, createProduct, getProduct, getProductById };
