import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const route = Router();

route.post("/import", protect, productController.importProducts);
route.post("/", protect, productController.createProduct);
route.get("/", productController.getProduct);
route.get("/:id", protect, productController.getProductById);
route.put("/:id", protect, productController.updateProduct);
route.delete("/:id", protect, productController.deleteProduct);

export default route;
