import express from "express";
import {
  deleteWorkout,
  updateWorkout,
  getWorkouts,
} from "../controllers/workoutController";

const router = express.Router();

router.delete("/workouts/:id", deleteWorkout);
router.patch("/workouts/:id", updateWorkout);

// Adicionando a rota GET para listar os treinos de um usuário
router.get("/workouts/:userId", getWorkouts);

export default router;
