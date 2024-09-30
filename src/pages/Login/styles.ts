import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 500px;
    height: 300px;
    border-radius: 8px;
    color: black;
    background: ${theme.green500};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    form {
      display: flex;
      flex-direction: column;
      gap: 8px 16px;
      align-items: center;
      width: 80%;
      height: 60%;
      input {
        height: 2rem;
        width: 100%;
        border: 1px solid ${theme.gray600};
        border-radius: 8px;
        padding: 0.5rem;
        background: ${theme.gray400};
        color: ${theme.white};
      }
      a {
        width: 100%;
      }
      border-bottom: 1px solid ${theme.gray100};
    }
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      height: 2rem;
      width: 80%;
      button {
        width: 100%;
        border: 0;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding-right: 0.5rem;
        align-items: center;
        background: ${theme.gray700};
        color: ${theme.white};
        font-weight: bold;
        font-family: sans-serif;
      }
    }
    padding: 2rem 0;
  `}
`;
