import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 500px;
    height: 300px;
    border-radius: 8px;
    background: ${theme.gray700};

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 5rem 0;

    & h1 {
      color: ${theme.white};
    }
  `}
`;
export const GoogleButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: white;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    color: ${theme.gray700};

    &:hover {
      color: ${theme.gray900};
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}
`;
