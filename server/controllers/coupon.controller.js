import expressAsyncHandler from "express-async-handler";
import couponModel from "../models/coupon.model";

const createCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export { createCoupon };
