import styled, { css } from "styled-components";
import { BaseButton } from "../../Main/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.gray600};
    width: 60%;
    height: 60vh;
    position: absolute;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `}
`;
export const ExitButton = styled(BaseButton)`
  ${({ theme }) => css`
    position: absolute;
    top: 5px;
    right: 10px;
    border: 0;
    &:hover {
      color: ${theme.red500};
    }
  `}
`;
