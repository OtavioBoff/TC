import React from "react";
import { Container, ExitButton } from "./styles";
import { X } from "phosphor-react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  return (
    <Container>
      <ExitButton onClick={onClose}>
        <X size={24} />
      </ExitButton>
      {children}
    </Container>
  );
}
