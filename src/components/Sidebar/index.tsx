import { Barbell, SignOut, Wrench } from "phosphor-react";
import { SidebarContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <NavLink to="/new-workout" title="NewWorkout">
          <Wrench size={32} />
        </NavLink>

        <NavLink to="/" title="Home">
          <Barbell size={32} />
        </NavLink>

        <NavLink to="/login" title="logout">
          <SignOut size={32} />
        </NavLink>
      </nav>
    </SidebarContainer>
  );
}
