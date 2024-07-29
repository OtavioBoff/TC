import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    color: ${theme.white};
    ul {
      list-style: none;
      li {
      }
    }
  `}
`;
