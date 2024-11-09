import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNotification = async (req: Request, res: Response) => {
  const { workoutId, userEmail, title, message } = req.body;

  if (!workoutId || !userEmail || !title || !message) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado." });
      return;
    }

    const notification = await prisma.notification.create({
      data: {
        title,
        message,
        read: false,
        userId: user.id,
        workoutId,
      },
    });

    res.status(201).json(notification);
  } catch (error) {
    console.error("Erro ao criar notificação:", error);
    res.status(500).json({ error: "Erro ao criar notificação." });
  }
};

// Método GET para buscar as notificações de um usuário
export const getNotifications = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  if (isNaN(userId)) {
    res.status(400).json({ error: "Invalid user ID" });
    return;
  }

  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { timestamp: "desc" }, // Ordena por data, da mais recente para a mais antiga
    });

    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching notifications" });
  }
};
