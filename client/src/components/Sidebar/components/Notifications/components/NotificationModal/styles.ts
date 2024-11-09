import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 74px;
  left: calc(100% - 300px);
  width: 300px;
  height: auto;
  max-height: 80vh;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.gray700};
    color: ${theme.gray100};

    border-radius: 8px;
    padding: 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    /* Estiliza os itens de notificação */
    .notification-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      background: ${theme.gray600};
      border-radius: 4px;
    }

    .notification-title {
      font-size: 1rem;
      font-weight: bold;
      color: ${theme.gray100};
    }

    .notification-time {
      font-size: 0.875rem;
      color: ${theme.gray300};
    }
  `}
`;
export const ExitButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    align-items: center;
    text-align: center;
    margin: 4px;
    padding: 4px;
    color: ${theme.gray300};
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;

    &:hover {
      color: ${theme.red500};
    }
  `}
`;
