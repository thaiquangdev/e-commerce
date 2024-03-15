import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();

router.post("/import", protect, categoryController.importCategories);
router.post("/", protect, categoryController.createCategory);
router.get("/", categoryController.getCategories);
router.put("/:id", protect, categoryController.getCategories);
router.delete("/:id", protect, categoryController.deleteCategory);

export default router;
