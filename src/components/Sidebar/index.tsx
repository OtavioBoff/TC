import { Barbell, List, SignOut } from "phosphor-react";
import { SidebarContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <NavLink to="/" title="Timer">
          <Barbell size={32} />
        </NavLink>
        <NavLink to="/list" title="List">
          <List size={32} />
        </NavLink>
        <NavLink to="/login" title="logout">
          <SignOut size={32} />
        </NavLink>
      </nav>
    </SidebarContainer>
  );
}
