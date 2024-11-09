import express from "express";
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationController";

const router = express.Router();

// Rota POST para criar notificações
router.post("/notifications", createNotification);

// Rota GET para listar notificações de um usuário
router.get("/notifications/:userId", getNotifications);

export default router;
