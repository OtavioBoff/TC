import express from "express";
import {
  copyWorkoutToUser,
  createNotification,
  getNotifications,
  updateNotificationsReadStatus,
} from "../controllers/notificationController";

const router = express.Router();

router.post("/notifications", createNotification);
router.post("/notifications/copy-workout", copyWorkoutToUser);
router.get("/notifications/:userId", getNotifications);
router.put("/notifications/:userId/read", updateNotificationsReadStatus);

export default router;
