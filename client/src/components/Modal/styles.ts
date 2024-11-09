import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;

    border-radius: 8px;
    background: ${theme.gray700};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 90%;
    min-height: 60vh;
    max-height: 90vh;

    padding: 2rem;
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
