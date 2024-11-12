import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px;
  gap: 8px;
`;
export const AddWorkoutButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background: none;
    border: 1px solid ${theme.gray400};
    border-radius: 8px;
    width: 100%;
    padding: 4px;
    cursor: pointer;
    color: ${theme.gray400};
    &:hover {
      color: ${theme.green500};
      border: 1px solid ${theme.green500};
    }
  `}
`;
