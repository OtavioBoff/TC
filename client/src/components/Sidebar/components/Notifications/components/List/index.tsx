import { Notification } from "../../../../../../@types";

type NotificationListProps = {
  notifications: Notification[];
};

export function NotificationList({ notifications }: NotificationListProps) {
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
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
