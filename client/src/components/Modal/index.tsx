import React from "react";
import { Container, Content, ExitButton } from "./styles";
import { PiX } from "react-icons/pi";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  return (
    <Container onClick={onClose}>
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ExitButton onClick={onClose}>
          <PiX size={32} />
        </ExitButton>
        {children}
      </Content>
    </Container>
  );
}
