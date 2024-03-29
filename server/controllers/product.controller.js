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
      category,
      salesOffer,
      internal,
      ram,
      stock,
    } = req.body;
    const product = new productModel({
      title,
      price,
      description,
      thumb,
      images,
      colors,
      category,
      salesOffer,
      internal,
      ram,
      stock,
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
    const title = search ? { title: { $regex: search, $options: "i" } } : {};

    // filter by category
    const categoryFilter = category ? { category } : {};

    // count table product
    const count = await productModel.countDocuments({
      ...title,
      ...categoryFilter,
      ...internalFilter,
    });

    // get products

    const products = await productModel
      .find({
        ...title,
        ...categoryFilter,
        ...internalFilter,
      })
      .limit(pageSize)
      .skip(pageSize * (pageNumber - 1));

    // get offer products
    const offers = await productModel.aggregate([
      { $match: { "saleOffer.status": true } }, // filter by status
      { $sample: { size: 10 } }, // get random 10 products
    ]);

    // send products, page number, total page and offer

    res.json({
      products,
      page: pageNumber,
      pages: Math.ceil(count / pageSize),
      offers,
    });
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
    // get related products
    const relatedProduct = await productModel
      .find({
        category: product.category,
        _id: { $ne: product._id }, // not include the product itself
      })
      .limit(4);
    if (product) {
      res.json({ product, relatedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc update product by id
// @route PUT /api/products/:id
// @access Private/admin

const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      images,
      category,
      salesOffer,
      stock,
      brand,
    } = req.body;
    const product = await productModel.findById(req.params.id);
    if (product) {
      product.title = title || product.title;
      product.price = price || product.price;
      product.description = description || product.description;
      product.images = images || product.images;
      product.category = category || product.category;
      product.salesOffer = salesOffer || product.salesOffer;
      product.stock = stock || product.stock;
      product.brand = brand || product.brand;
      const updateProduct = await product.save();
      res.json(updateProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc delete product by id
// @router DELETE /api/products/:id
// @access Private/admin

const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// export all products
export {
  importProducts,
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
