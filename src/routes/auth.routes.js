import { Router } from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getResponse } from "../controllers/protected.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", authMiddleware, refreshToken);

router.post("/logout", authMiddleware, logoutUser);
router.get("/protected-resource", authMiddleware, getResponse);

export default router;
