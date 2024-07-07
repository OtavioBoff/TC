import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { List } from "./pages/List/index";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginLayout } from "./layouts/LoginLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Route>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
