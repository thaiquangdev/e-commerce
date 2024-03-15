import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { protect } from "../middlewares/Auth.middleware.js";

const router = Router();
router.post("/import/all", userController.importUser);
router.post("/login", userController.login);
router.post("/", userController.register);

router.put("/", protect, userController.updateProfile);
router.put("/change-password", protect, userController.changePassword);

router.delete("/", protect, userController.deleteUser);

export default router;
