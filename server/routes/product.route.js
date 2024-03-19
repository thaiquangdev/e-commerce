import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const route = Router();

route.post("/import", protect, productController.importProducts);
route.post("/", protect, productController.createProduct);
route.get("/", productController.getProduct);
route.get("/:id", protect, productController.getProductById);

export default route;
