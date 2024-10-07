import { createContext } from "react";
import { Workout, Workouts } from "../@types";

type RegisterWorkoutContextData = {
  workouts: Workouts[];
  setWorkouts: (data: Workouts[]) => void;
  workoutsIndex: number;
  setWorkoutsIndex: (data: number) => void;
  workoutsPageIndex: number;
  setWorkoutsPageIndex: (data: number) => void;

  workout: Workout[];
  setWorkout: (data: Workout[]) => void;
  pageIndex: number;
  setPageIndex: (data: number) => void;

  isEditingWorkout: boolean;
  setIsEditingWorkout: (data: boolean) => void;
};

export const RegisterWorkoutContext = createContext<RegisterWorkoutContextData>(
  {} as RegisterWorkoutContextData
);
