import expressAsyncHandler from "express-async-handler";
import couponModel from "../models/coupon.model.js";

const createCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const newCoupon = await couponModel.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const getCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const { cid } = req.params;
    const coupon = await couponModel.findById(cid);
    res.json({ coupon, success: coupon ? true : false });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const applyCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const coupon = await couponModel.findOne({ name });

    if (!coupon) {
      return res.json({ message: "Coupon is invalid!", success: false });
    }

    if (new Date() > coupon.expiry) {
      return res.json({ message: "Coupon has expired!", success: false });
    }

    return res.json({ coupon, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export { createCoupon, getCoupon, applyCoupon };
