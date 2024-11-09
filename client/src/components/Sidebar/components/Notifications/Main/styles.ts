import styled, { css } from "styled-components";

export const NotificationButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: ${theme.gray400};
    &:hover {
      color: ${theme.green500};
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      background: ${theme.red500};
      color: ${theme.white};
      border-radius: 50%;
      padding: 0.7px 3px;
      font-size: 0.5rem;
    }
  `}
`;
