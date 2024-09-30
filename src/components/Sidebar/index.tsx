import { PiBarbell, PiSignOut, PiWrench } from "react-icons/pi";
import { SidebarContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <NavLink to="/new-workout" title="NewWorkout">
          <PiWrench size={32} />
        </NavLink>

        <NavLink to="/" title="Home">
          <PiBarbell size={32} />
        </NavLink>

        <NavLink to="/login" title="logout">
          <PiSignOut size={32} />
        </NavLink>
      </nav>
    </SidebarContainer>
  );
}
