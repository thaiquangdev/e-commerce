import { Router } from "express";
import * as bannerProductController from "../controllers/bannerProduct.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();

router.post("/import", protect, bannerProductController.importBannerProducts);
router.post("/", protect, bannerProductController.createBannerProducts);
router.get("/", bannerProductController.getBannerProducts);
router.put("/:id", protect, bannerProductController.updateBannerProduct);
router.delete("/:id", protect, bannerProductController.deleteBannerProduct);

export default router;
