import bannerProductModel from "../models/bannerProduct.model.js";
import expressAsyncHandler from "express-async-handler";
import { bannerProducts } from "../Data.js";

// @desc import banner products
// @route POST /api/bannerproducts/import
// @access Private/admin

const importBannerProducts = expressAsyncHandler(async (req, res) => {
  try {
    // delete import banner products
    await bannerProductModel.deleteMany();

    // insert all banner products
    const createBannerProduct = await bannerProductModel.insertMany(
      bannerProducts
    );
    res.status(201).json(createBannerProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc create banner products
// @route POST /api/bannerproducts/
// @access Private/admin

const createBannerProducts = expressAsyncHandler(async (req, res) => {
  try {
    const { category, imagesBanner, images } = req.body;
    const BannerProducts = await bannerProductModel({
      category,
      imagesBanner,
      images,
    });
    const createBannerProducts = await BannerProducts.save();
    res.status(201).json(createBannerProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getBannerProducts = expressAsyncHandler(async (req, res) => {
  try {
    const { category } = req.query;
    const categoryFilter = category ? { category } : {};
    const getBannerProducts = await bannerProductModel.findOne(categoryFilter);
    res.status(201).json(getBannerProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const updateBannerProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { category, imagesBanner, images } = req.body;
    const bannerProduct = await bannerProductModel.findById(req.params.id);
    if (bannerProduct) {
      bannerProduct.category = category || bannerProduct.category;
      bannerProduct.imagesBanner = imagesBanner || bannerProduct.imagesBanner;
      bannerProduct.images = images || bannerProduct.images;
    }
    const updateBannerProduct = await bannerProduct.save();
    res.status(201).json(updateBannerProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const deleteBannerProduct = expressAsyncHandler(async (req, res) => {
  try {
    const bannerProduct = await bannerProductModel.findByIdAndDelete(
      req.params.id
    );
    if (bannerProduct) {
      res.status(201).json({ message: "banner product remove" });
    } else {
      res.status(400).json({ message: "banner product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  importBannerProducts,
  createBannerProducts,
  getBannerProducts,
  updateBannerProduct,
  deleteBannerProduct,
};
