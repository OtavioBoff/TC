import { PiBarbell, PiSignOut, PiWrench } from "react-icons/pi";
import { SidebarContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { Notifications } from "./components/Notifications/Main";
import { useEffect, useState } from "react";
import { Notification } from "../../@types";
import axios from "axios";

export function Sidebar() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/notifications/1`);
      setNotifications(response.data);
    } catch (error) {
      console.error("Erro ao buscar notificações:", error);
    }
  };

  // Buscar notificações ao carregar o componente
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <SidebarContainer>
      <nav></nav>
      <nav>
        <NavLink to="/create" title="NewWorkout">
          <PiWrench size={32} />
        </NavLink>

        <NavLink to="/" title="Home">
          <PiBarbell size={32} />
        </NavLink>

        <NavLink to="/login" title="logout">
          <PiSignOut size={32} />
        </NavLink>
      </nav>
      <nav>
        <Notifications notifications={notifications} />
      </nav>
    </SidebarContainer>
  );
}
