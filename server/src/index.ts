import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;

app.use(cors()); // Allow access from frontend
app.use(express.json()); // Support for JSON

interface Series {
  id: number; // ou o tipo que você estiver usando
  reps: number;
  weight: number;
  exercisesId: number;
}

interface Exercise {
  id: number;
  muscle: string;
  exercise: string;
  observation?: string;
  series: Series[];
}

// Route to create a new user
app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({ data: { name, email } });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error); // Adicione este log
    res.status(400).json({ error: "Error creating user" });
  }
});

// Route to list users with their workouts
app.get("/", async (req: Request, res: Response) => {
  try {
    const workouts = await prisma.workout.findMany({
      where: { userId: 1 },
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
    console.error("Error:", error); // Esta linha já existe
    res.status(500).json({ error: "Error listing users" });
  }
});

app.post("/new-workout", async (req: Request, res: Response) => {
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

    res.status(201).json(newWorkout);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "Error creating workout" });
  }
});

// Initialize the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
