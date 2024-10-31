import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${() => css`
    height: 50%;
    width: 100%;
    padding: 0 16px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    background: #ccc;
    border-radius: 8px;
    color: ${theme.gray800};
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    padding: 8px;
  `}
`;
