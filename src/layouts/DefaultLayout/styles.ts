import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.gray800};
    height: 100vh;
    width: auto;
    color: ${theme.white};
  `}
`;
