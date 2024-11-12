import axios from "axios";
import { Notification } from "../../../../../../@types";
import { AddWorkoutButton, Content } from "./styles";
type NotificationListProps = {
  notifications: Notification[];
};

export function NotificationList({ notifications }: NotificationListProps) {
  const copyWorkout = async (data: Notification) => {
    const workoutId = data.workoutId;
    const email = data.email;

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
