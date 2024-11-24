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
export const WithoutWorkout = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: ${theme.gray300};
    font-size: 1.5rem;
  `}
`;
