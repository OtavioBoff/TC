import styled, { css } from "styled-components";
import { BaseButton } from "../../Main/styles";

export const FormContainer = styled.form`
  ${() => css`
    height: 50%;
    width: 100%;
    padding: 0 16px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    overflow: auto;
  `}
`;
export const SubmitButton = styled(BaseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.white};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    background: #ccc;
    border-radius: 8px;
    color: ${theme.gray800};
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    padding: 8px;
  `}
`;
