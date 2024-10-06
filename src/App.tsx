import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Workout, Workouts } from "./@types";
import { RegisterWorkoutContext } from "./contexts/workoutContext";
import { workoutTest } from "./workoutTest";

export function App() {
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [workouts, setWorkouts] = useState<Workouts[]>([
    workoutTest,
    workoutTest,
    workoutTest,
  ]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [workoutIndex, setWorkoutIndex] = useState<number>(0);
  return (
    <RegisterWorkoutContext.Provider
      value={{
        workout,
        setWorkout,
        pageIndex,
        setPageIndex,
        workouts,
        setWorkouts,
        workoutIndex,
        setWorkoutIndex,
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
