import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.gray800};
    height: 100vh;
    width: auto;
    color: ${theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
