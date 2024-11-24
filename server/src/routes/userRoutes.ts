import express from "express";
import { authGoogle } from "../controllers/userController";
const router = express.Router();

// router.post("/users", createUser);
router.post("/auth/google", authGoogle);

export default router;
