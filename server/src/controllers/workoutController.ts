import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createWorkout = async (req: Request, res: Response) => {
  const { userId, name, groups } = req.body;

  try {
    const newWorkout = await prisma.workout.create({
      data: {
        name,
        userId,
        groups: {
          create: groups.map((group: any) => ({
            name: group.name,
            exercises: {
              create: group.exercises.map((exercise: any) => ({
                muscle: exercise.muscle,
                exercise: exercise.exercise,
                observation: exercise.observation,
                series: {
                  create: exercise.series.map((serie: any) => ({
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

    await prisma.group.deleteMany({
      where: {
        exercises: { none: {} }, // Verifica se o grupo não tem exercícios
      },
    });

    res.status(201).json(newWorkout);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "Error creating workout" });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await prisma.workout.delete({
      where: { id: Number(id) },
    });
    res
      .status(200)
      .json({ message: "Workout deleted successfully", deletedWorkout });
  } catch (error) {
    console.error("Error deleting workout:", error);
    res.status(500).json({ error: "Failed to delete workout" });
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, groups } = req.body;

  try {
    await prisma.series.deleteMany({
      where: { exercise: { group: { workoutId: Number(id) } } },
    });
    await prisma.exercise.deleteMany({
      where: { group: { workoutId: Number(id) } },
    });
    await prisma.group.deleteMany({
      where: { workoutId: Number(id) },
    });

    const updatedWorkout = await prisma.workout.update({
      where: { id: Number(id) },
      data: { name },
    });

    for (const group of groups) {
      const createdGroup = await prisma.group.create({
        data: {
          name: group.name,
          workoutId: Number(id),
        },
      });

      for (const exercise of group.exercises) {
        const createdExercise = await prisma.exercise.create({
          data: {
            muscle: exercise.muscle,
            exercise: exercise.exercise,
            observation: exercise.observation,
            groupId: createdGroup.id,
          },
        });

        for (const series of exercise.series) {
          await prisma.series.create({
            data: {
              reps: series.reps,
              weight: series.weight,
              exerciseId: createdExercise.id,
            },
          });
        }
      }
    }

    res.json({
      message: "Workout updated successfully",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.error("Error updating workout:", error);
    res.status(500).json({ error: "Error updating workout" });
  }
};

export const getWorkouts = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const workouts = await prisma.workout.findMany({
      where: { userId: Number(userId) },
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
    res.json(workouts);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching workouts" });
  }
};
