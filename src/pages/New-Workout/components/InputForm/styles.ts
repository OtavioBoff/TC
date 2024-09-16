import styled, { css } from "styled-components";
import { BaseButton } from "../../Main/styles";

export const FormContainer = styled.form`
  ${() => css`
    height: 80%;
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

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  label {
    text-align: center;
  }
`;
export const NumberInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    background: transparent;
    padding-left: 0.5rem;
    color: ${theme.white};
    text-align: center;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    background: #ccc;
    border-radius: 8px;
    padding: 8px;
    color: ${theme.gray800};
    &:focus {
      outline: 0;
    }
    &#series {
      padding: 12px;
      border: 0;
      background: #ccc;
      border-radius: 8px;
      color: ${theme.gray800};
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
    text-align: center;
    padding: 12px;
    &#group-name {
      font-size: 1.25rem;
      padding: 8px;
    }
  `}
`;
export const TextAreaInput = styled.textarea`
  ${({ theme }) => css`
    border: 0;
    background: #ccc;
    border-radius: 8px;
    color: ${theme.gray800};
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    overflow: hidden;
    resize: none;
    padding: 12px;
    text-align: center;
  `}
`;
