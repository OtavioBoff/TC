import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.gray800};
    color: black;
    width: 100%;
    height: 100vh;
  `}
`;
