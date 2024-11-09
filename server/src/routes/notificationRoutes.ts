import express from "express";
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationController";

const router = express.Router();

router.post("/notifications", createNotification);
router.get("/notifications/:userId", getNotifications);

export default router;
