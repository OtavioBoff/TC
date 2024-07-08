import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.white};
    display: flex;
    justify-content: center;
    margin: auto;
  `}
`;
