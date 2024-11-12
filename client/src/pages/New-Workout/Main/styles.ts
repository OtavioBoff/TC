import styled, { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${theme.gray800};
    padding: 2rem;
    footer {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 4px;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1.5rem;
    font-weight: 500;
    border: 1px solid ${theme.gray300};
    color: ${theme.gray300};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${theme.green500};
      border-color: ${theme.green500};
    }
  `}
`;

export const AddButton = styled(BaseButton)`
  ${({ theme }) => css`
    background: transparent;
    color: ${theme.green500};
    border: 3px dashed ${theme.green700};
  `}
`;

export const SubmitButton = styled(BaseButton)`
  ${({ theme }) => css`
    background: transparent;

    &:disabled {
      cursor: not-allowed;
      background: transparent;
      color: ${theme.gray500};
      border-color: ${theme.gray500};
    }
  `}
`;

export const CreateNewWorkoutButton = styled(BaseButton)`
  ${() => css`
    font-size: 2rem;
    font-weight: 600;
    border-radius: 12px;
    padding: 10px 20px;
    transition: all 0.15s ease;
  `}
`;

export const InputsContainer = styled.div`
  display: flex;
`;
export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    text-align: center;
  }
`;
export const Input = styled.input`
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
    font-size: 24px;
  `}
`;
