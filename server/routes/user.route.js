import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();
router.post("/import/all", userController.importUser);
router.post("/login", userController.login);
router.post("/", userController.register);
router.post("/update-cart", protect, userController.updateCart);

router.put("/", protect, userController.updateProfile);
router.put("/", protect, userController.updateUserAddress);
router.put("/refreshtoken", protect, userController.refreshAccessToken);
router.put("/:pid", protect, userController.addToWishlist);
router.get("/logout", protect, userController.logout);
router.get("/cart", protect, userController.getUserCart);
router.put("/change-password", protect, userController.changePassword);

router.delete("/", protect, userController.deleteUser);

export default router;
