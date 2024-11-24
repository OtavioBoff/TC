import { createContext } from "react";
import { Group, Workout } from "../@types";

type RegisterWorkoutContextData = {
  workout: Workout[];
  setWorkout: (data: Workout[]) => void;
  workoutsIndex: number;
  setWorkoutsIndex: (data: number) => void;
  workoutsPageIndex: number;
  setWorkoutsPageIndex: (data: number) => void;

  group: Group[];
  setGroup: (data: Group[]) => void;
  pageIndex: number;
  setPageIndex: (data: number) => void;

  isEditingWorkout: boolean;
  setIsEditingWorkout: (data: boolean) => void;

  refresh: boolean;
  setRefresh: (data: boolean) => void;
};

export const RegisterWorkoutContext = createContext<RegisterWorkoutContextData>(
  {} as RegisterWorkoutContextData
);
