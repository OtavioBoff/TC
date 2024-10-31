var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const app = express();
const prisma = new PrismaClient();
const PORT = 4000;
app.use(cors()); // Allow access from frontend
app.use(express.json()); // Support for JSON
// Route to create a new user
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const newUser = yield prisma.user.create({ data: { name, email } });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error("Error:", error); // Adicione este log
        res.status(400).json({ error: "Error creating user" });
    }
}));
// Route to list users with their workouts
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workouts = yield prisma.workout.findMany({
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
    }
    catch (error) {
        console.error("Error:", error); // Esta linha já existe
        res.status(500).json({ error: "Error listing users" });
    }
}));
app.post("/new-workout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, name, groups } = req.body;
    try {
        const newWorkout = yield prisma.workout.create({
            data: {
                name,
                userId,
                groups: {
                    create: groups.map((group) => ({
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
    }
    catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: "Error creating workout" });
    }
}));
// Initialize the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
