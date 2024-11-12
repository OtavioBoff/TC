import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNotification = async (req: Request, res: Response) => {
  const { workoutId, userEmail, userName, message } = req.body;

  if (!workoutId || !userEmail || !userName || !userName) {
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
        message,
        read: false,
        userId: user.id,
        userName,
        email: userEmail,
        workoutId,
      },
    });

    res.status(201).json(notification);
  } catch (error) {
    console.error("Erro ao criar notificação:", error);
    res.status(500).json({ error: "Erro ao criar notificação." });
  }
};

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

export const copyWorkoutToUser = async (req: Request, res: Response) => {
  const { workoutId, email } = req.body;

  try {
    const originalWorkout = await prisma.workout.findUnique({
      where: { id: workoutId },
      include: {
        groups: {
          include: {
            exercises: {
              include: {
                series: true,
              },
            },
          },
        },
      },
    });

    if (!originalWorkout) {
      res.status(404).json({ error: "Workout not found" });
      return;
    }

    // Obter o ID do usuário com base no email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Clonar o treino e associar ao novo usuário
    const newWorkout = await prisma.workout.create({
      data: {
        name: originalWorkout.name,
        userId: user.id,
        groups: {
          create: originalWorkout.groups.map((group) => ({
            name: group.name,
            exercises: {
              create: group.exercises.map((exercise) => ({
                muscle: exercise.muscle,
                exercise: exercise.exercise,
                observation: exercise.observation,
                series: {
                  create: exercise.series.map((serie) => ({
                    reps: serie.reps,
                    weight: serie.weight,
                  })),
                },
              })),
            },
          })),
        },
      },
    });

    res.status(201).json(newWorkout);
  } catch (error) {
    console.error("Error copying workout:", error);
    res
      .status(500)
      .json({ error: "An error occurred while copying the workout" });
  }
};
