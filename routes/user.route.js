import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import validateToken from "../middleware/validateTokenHandler.js";
const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(validateToken, currentUser);

export default router;
