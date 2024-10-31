import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function LoginLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
