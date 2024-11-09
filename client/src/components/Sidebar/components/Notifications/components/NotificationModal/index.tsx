import { ReactNode } from "react";
import { Container, Content, ExitButton } from "./styles"; // Importa os estilos
import { BiX } from "react-icons/bi";

type NotificationModalProps = {
  children: ReactNode;
  isModalVisible: boolean;
  closeModal: () => void;
};

export function NotificationModal({
  children,
  isModalVisible,
  closeModal,
}: NotificationModalProps) {
  if (!isModalVisible) return null; // Retorna null se o modal não estiver visível

  return (
    <Container>
      <ExitButton onClick={closeModal}>
        <BiX size={32} />
      </ExitButton>
      <Content>{children}</Content>
    </Container>
  );
}
