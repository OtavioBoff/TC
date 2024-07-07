import styled, { css } from "styled-components";

export const SidebarContainer = styled.header`
  ${({ theme }) => css`
    width: 96px;
    height: 100%;
    background: ${theme.gray900};
    display: flex;
    align-items: center;
    justify-content: center;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      a {
        color: ${theme.gray400};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        &:hover {
          border-bottom: 3px solid ${theme.green500};
        }

        &.active {
          color: ${theme.green500};
        }
      }
    }
  `}
`;
