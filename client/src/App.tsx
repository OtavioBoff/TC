import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useEffect, useState } from "react";
import { Workout, Workouts } from "./@types";
import { RegisterWorkoutContext } from "./contexts/workoutContext";
import api from "./services/api"; // Importa o serviço de API

export function App() {
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [workouts, setWorkouts] = useState<Workouts[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [workoutsIndex, setWorkoutsIndex] = useState<number>(0);
  const [workoutsPageIndex, setWorkoutsPageIndex] = useState<number>(0);
  const [isEditingWorkout, setIsEditingWorkout] = useState<boolean>(false);

  // Função para buscar Workouts do backend
  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        if (response.data.length > 0 && response.data[0].workout) {
          const workoutsData = response.data[0].workout;
          console.log(workoutsData);
        }
      })
      .catch((error) => console.error("Erro ao buscar workouts:", error));
  }, []);

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
