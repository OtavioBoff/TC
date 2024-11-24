import { useState } from "react";
import { FaBell } from "react-icons/fa";

import { NotificationModal } from "../components/NotificationModal";
import { Notification } from "../../../../../@types";
import { NotificationList } from "../components/List";
import { NotificationButton } from "./styles";

type NotificationProps = {
  notifications: Notification[];
};

export function Notifications({ notifications }: NotificationProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const closeModal = () => setIsModalVisible(false);

  return (
    <div style={{ position: "relative" }}>
      <NotificationButton onClick={() => setIsModalVisible(!isModalVisible)}>
        <FaBell size={24} />
        {unreadCount > 0 && <span>{unreadCount}</span>}
      </NotificationButton>
      <NotificationModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      >
        <NotificationList notifications={notifications} />
      </NotificationModal>
    </div>
  );
}
