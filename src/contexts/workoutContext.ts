import { createContext } from "react";
import { Workout, Workouts } from "../@types";

type RegisterWorkoutContextData = {
  workouts: Workouts[];
  setWorkouts: (data: Workouts[]) => void;
  workout: Workout[];
  setWorkout: (data: Workout[]) => void;
  pageIndex: number;
  setPageIndex: (data: number) => void;
};

export const RegisterWorkoutContext = createContext<RegisterWorkoutContextData>(
  {} as RegisterWorkoutContextData
);
