import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.white};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    margin: auto;
  `}
`;
