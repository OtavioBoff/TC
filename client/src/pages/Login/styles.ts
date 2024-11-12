import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 500px;
    height: 300px;
    border-radius: 8px;
    background: ${theme.gray700};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;

    & h1 {
      color: ${theme.gray300};
    }
  `}
`;
