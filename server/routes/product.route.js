import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";
import uploader from "../config/cloudinary.config.js";

const route = Router();

route.post("/import", protect, productController.importProducts);
route.post("/", protect, productController.createProduct);
route.get("/", productController.getProduct);
route.get("/:id", productController.getProductById);
route.put("/ratings", protect, productController.rating)
route.put(
  "/:id",
  protect,
  uploader.array("images", 10),
  productController.updateProduct
);
route.put("/uploadImage/:id", protect, productController.uploadImageProduct);
route.delete("/:id", protect, productController.deleteProduct);

export default route;
