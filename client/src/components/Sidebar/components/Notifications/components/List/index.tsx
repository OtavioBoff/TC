import axios from "axios";
import { Notification } from "../../../../../../@types";
import { AddWorkoutButton, Content } from "./styles";
import { useContext, useEffect } from "react";
import { RegisterWorkoutContext } from "../../../../../../contexts/workoutContext";
import { RegisterUserContext } from "../../../../../../contexts/userContext";
type NotificationListProps = {
  notifications: Notification[];
};

export function NotificationList({ notifications }: NotificationListProps) {
  const { refresh, setRefresh } = useContext(RegisterWorkoutContext);
  const { user } = useContext(RegisterUserContext);
  const copyWorkout = async (data: Notification) => {
    const workoutId = data.workoutId;
    const email = data.email;
    setRefresh(!refresh);
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:4000/notifications/copy-workout",
        { workoutId, email }
      );
      console.log("Workout copied successfully:", response.data);
    } catch (error) {
      console.error("Erro ao copiar workout:", error);
    }
  };

  useEffect(() => {
    const markNotificationsAsRead = async () => {
      try {
        await axios.put(`http://localhost:4000/notifications/${user.id}/read`);
        console.log("Notificações atualizadas para lidas");
      } catch (error) {
        console.error("Erro ao atualizar notificações", error);
      }
    };
    markNotificationsAsRead();
  }, [user.id]);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Notificações</h2>
      {notifications.length === 0 ? (
        <p>Não há notificações.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
            >
              <Content>
                <strong>{notification.userName}</strong>
                <p>{notification.message}</p>
                <AddWorkoutButton
                  onClick={() => {
                    copyWorkout(notification);
                  }}
                >
                  Adicionar aos meus treinos
                </AddWorkoutButton>
              </Content>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
