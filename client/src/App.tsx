import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Workout, Group, User } from "./@types";
import { RegisterWorkoutContext } from "./contexts/workoutContext";
import { RegisterUserContext } from "./contexts/userContext";
// import api from "./services/api"; // Importa o serviço de API
// import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
  const testUser = {
    id: 1,
    name: "john",
    email: "johndoe@gmail.com",
  };
  const [user, setUser] = useState<User>(testUser);
  const [group, setGroup] = useState<Group[]>([]);
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [workoutsIndex, setWorkoutsIndex] = useState<number>(0);
  const [workoutsPageIndex, setWorkoutsPageIndex] = useState<number>(0);
  const [isEditingWorkout, setIsEditingWorkout] = useState<boolean>(false);

  return (
    // <GoogleOAuthProvider clientId="973083932552-tvpp83h5vcjo30ursb8m1so2q9ct6eel.apps.googleusercontent.com">
    <RegisterUserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <RegisterWorkoutContext.Provider
        value={{
          group,
          setGroup,
          pageIndex,
          setPageIndex,
          workout,
          setWorkout,
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
    </RegisterUserContext.Provider>
    // </GoogleOAuthProvider>
  );
}