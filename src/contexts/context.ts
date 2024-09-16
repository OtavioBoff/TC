import { createContext } from "react";
import { Workout } from "../@types";

type RegisterContextData = {
  workouts: Workout[][];
  setWorkouts: (data: Workout[][]) => void;
  workout: Workout[];
  setWorkout: (data: Workout[]) => void;
  pageNumber: number;
  setPageNumber: (data: number) => void;
  // exercises: Workout;
  // setExercises: (data: Workout) => void;
};

export const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);
