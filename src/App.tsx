import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Workout, Workouts } from "./@types";
import { RegisterWorkoutContext } from "./contexts/workoutContext";
import workoutsTest from "./workoutTest";

export function App() {
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [workouts, setWorkouts] = useState<Workouts[]>(workoutsTest);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [workoutsIndex, setWorkoutsIndex] = useState<number>(0);
  const [workoutsPageIndex, setWorkoutsPageIndex] = useState<number>(0);
  const [isEditingWorkout, setIsEditingWorkout] = useState<boolean>(false);
  return (
    <RegisterWorkoutContext.Provider
      value={{
        workout,
        setWorkout,
        pageIndex,
        setPageIndex,
        workouts,
        setWorkouts,
        workoutsIndex,
        setWorkoutsIndex,
        workoutsPageIndex,
        setWorkoutsPageIndex,
        isEditingWorkout,
        setIsEditingWorkout,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </RegisterWorkoutContext.Provider>
  );
}
