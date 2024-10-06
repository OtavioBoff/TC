import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${() => css`
    height: 80%;
    width: 100%;
    padding: 0 16px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    overflow: auto;
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
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  label {
    text-align: center;
    font-size: 2rem;
  }
`;

const baseInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: ${theme.gray900};
    background: ${theme.gray300};
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
  `}
`;

export const NumberInput = styled(baseInput)`
  ${() => css`
    width: 80%;
  `}
`;
export const TextInput = styled(baseInput)`
  ${() => css``}
`;

export const TextAreaInput = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: ${theme.gray900};
    background: ${theme.gray300};
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
    resize: none;
    overflow: hidden;
  `}
`;
