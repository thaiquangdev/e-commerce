import { Router } from "express";
import * as orderController from "../controllers/order.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();

router.post("/cart/create-order", protect, orderController.createOrder);

export { router };
