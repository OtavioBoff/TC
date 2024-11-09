import styled, { css } from "styled-components";

export const TableRow = styled.tr`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.gray100};
      background-color: ${theme.gray600};
    }
  `}
`;

export const AddButtonRow = styled.tr`
  ${({ theme }) => css`
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 0px;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 100%;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${theme.green500};
    &:hover {
      background: ${theme.green700};
      color: ${theme.white};
      border-color: ${theme.green700};
    }
  `}
`;
