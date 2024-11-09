import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Main/index";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginLayout } from "./layouts/LoginLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NewWorkout } from "./pages/New-Workout/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NewWorkout />} />
      </Route>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
