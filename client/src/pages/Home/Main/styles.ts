import styled, { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${theme.gray800};
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
  `}
`;
