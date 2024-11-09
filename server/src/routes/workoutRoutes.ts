import express from "express";
import {
  deleteWorkout,
  updateWorkout,
  getWorkouts,
  createWorkout,
} from "../controllers/workoutController";

const router = express.Router();

router.post("/workouts", createWorkout);
router.delete("/workouts/:id", deleteWorkout);
router.patch("/workouts/:id", updateWorkout);
router.get("/workouts/:userId", getWorkouts);

export default router;
