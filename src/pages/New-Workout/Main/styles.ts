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
      flex-direction: column;
    }
  `}
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    align-items: center;
    text-align: center;
    margin: 4px;
    border: 1px solid ${theme.gray300};
    border-radius: 8px;
    padding: 4px;
    color: ${theme.gray300};
    &:focus {
      outline: 0;
    }
  `}
`;
export const RemoveButton = styled(BaseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.red500};
    }
  `}
`;
export const AddButton = styled(BaseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.green500};
    }
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