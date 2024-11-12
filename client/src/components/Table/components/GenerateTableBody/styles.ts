import styled, { css } from "styled-components";

export const TableRow = styled.tr`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.gray100};
      background-color: ${theme.gray600};
    }
  `}
`;
