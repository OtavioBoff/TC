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
    // Atualiza o nome do workout
    const updatedWorkout = await prisma.workout.update({
      where: { id: Number(id) },
      data: { name },
    });

    // Obter IDs dos grupos existentes
    const existingGroups = await prisma.group.findMany({
      where: { workoutId: Number(id) },
      select: { id: true },
    });
    const existingGroupIds = existingGroups.map((group) => group.id);
    const updatedGroupIds = groups
      .map((group: any) => group.id)
      .filter(Boolean);
    const groupsToDelete = existingGroupIds.filter(
      (id) => !updatedGroupIds.includes(id)
    );

    // Remover grupos obsoletos
    await prisma.group.deleteMany({
      where: { id: { in: groupsToDelete } },
    });

    for (const group of groups) {
      const updatedGroup = await prisma.group.upsert({
        where: { id: group.id || 0 },
        update: { name: group.name },
        create: { name: group.name, workoutId: Number(id) },
      });

      // Obter IDs dos exercícios existentes para o grupo
      const existingExercises = await prisma.exercise.findMany({
        where: { groupId: updatedGroup.id },
        select: { id: true },
      });
      const existingExerciseIds = existingExercises.map(
        (exercise) => exercise.id
      );
      const updatedExerciseIds = group.exercises
        .map((exercise: any) => exercise.id)
        .filter(Boolean);
      const exercisesToDelete = existingExerciseIds.filter(
        (id) => !updatedExerciseIds.includes(id)
      );

      // Remover exercícios obsoletos
      await prisma.exercise.deleteMany({
        where: { id: { in: exercisesToDelete } },
      });

      for (const exercise of group.exercises) {
        const updatedExercise = await prisma.exercise.upsert({
          where: { id: exercise.id || 0 },
          update: {
            muscle: exercise.muscle,
            exercise: exercise.exercise,
            observation: exercise.observation,
          },
          create: {
            muscle: exercise.muscle,
            exercise: exercise.exercise,
            observation: exercise.observation,
            groupId: updatedGroup.id,
          },
        });

        // Obter IDs das séries existentes para o exercício
        const existingSeries = await prisma.series.findMany({
          where: { exerciseId: updatedExercise.id },
          select: { id: true },
        });
        const existingSeriesIds = existingSeries.map((series) => series.id);
        const updatedSeriesIds = exercise.series
          .map((series: any) => series.id)
          .filter(Boolean);
        const seriesToDelete = existingSeriesIds.filter(
          (id) => !updatedSeriesIds.includes(id)
        );

        // Remover séries obsoletas
        await prisma.series.deleteMany({
          where: { id: { in: seriesToDelete } },
        });

        for (const series of exercise.series) {
          await prisma.series.upsert({
            where: { id: series.id || 0 },
            update: {
              reps: series.reps,
              weight: series.weight,
            },
            create: {
              reps: series.reps,
              weight: series.weight,
              exerciseId: updatedExercise.id,
            },
          });
        }
      }
    }

    await prisma.group.deleteMany({
      where: {
        workoutId: Number(id),
        exercises: { none: {} }, // Verifica se o grupo não tem exercícios
      },
    });

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
