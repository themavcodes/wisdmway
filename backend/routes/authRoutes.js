import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { body } from "express-validator";


const router = express.Router();


router.get("/", (req, res) => {
  res.send("Welcome to the Wisdmway2 API!");
});

router.post(
  "/register",
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  registerUser
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required"),
  loginUser
);

export default router;
