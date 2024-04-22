import { Router } from "express";
import * as couponController from "../controllers/coupon.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();

router.post("/", protect, couponController.createCoupon);
router.get("/cid", protect, couponController.getCoupon);
router.post("/apply-coupon", protect, couponController.applyCoupon);

export default router;
