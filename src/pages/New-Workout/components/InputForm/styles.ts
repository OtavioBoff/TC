import styled, { css } from "styled-components";
import { BaseButton } from "../../CreateTraining/Main/styles";

export const FormContainer = styled.form`
  ${() => css`
    height: 80%;
    padding: 16px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;
export const SubmitButton = styled(BaseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.white};
    }
  `}
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    text-align: center;
  }
`;
export const NumberInput = styled.input`
  ${({ theme }) => css`
    width: 20%;
    border: 0;
    background: transparent;
    width: 100%;
    padding-left: 0.5rem;
    color: ${theme.white};
    text-align: center;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    &:focus {
      outline: 0;
    }
  `}
`;
export const TextInput = styled.input`
  ${({ theme }) => css`
    border: 0;
    background: #ccc;
    border-radius: 8px;
    color: ${theme.gray800};
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    overflow: hidden;
    resize: none;
    padding: 16px;
  `}
`;
