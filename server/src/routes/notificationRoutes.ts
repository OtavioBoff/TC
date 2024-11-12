import express from "express";
import {
  copyWorkoutToUser,
  createNotification,
  getNotifications,
} from "../controllers/notificationController";

const router = express.Router();

router.post("/notifications", createNotification);
router.post("/notifications/copy-workout", copyWorkoutToUser);
router.get("/notifications/:userId", getNotifications);

export default router;
