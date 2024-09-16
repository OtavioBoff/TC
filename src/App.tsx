import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Workout } from "./@types";
import { RegisterContext } from "./contexts/context";
import { workoutTest } from "./test";

export function App() {
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [workouts, setWorkouts] = useState<Workout[][]>([workoutTest]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  return (
    <RegisterContext.Provider
      value={{
        workout,
        setWorkout,
        pageNumber,
        setPageNumber,
        workouts,
        setWorkouts,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </RegisterContext.Provider>
  );
}
