import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    table {
      color: ${theme.gray100};
      width: 100%;
      border-collapse: collapse;
      caption {
        border: 1px solid white;
      }
      thead {
        color: inherit;
        tr {
          th {
            border-right: 1px solid white;
            border-left: 1px solid white;
            text-decoration: none;
          }
        }
      }
      tbody {
        color: inherit;
        tr {
          td {
            border-right: 1px solid white;
            border-left: 1px solid white;
            input {
              border: 0;
              background: transparent;
              width: 100%;
              padding-left: 0.5rem;
              color: ${theme.white};
              &:focus {
                box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
                outline: 0;
              }
              &[type="number"] {
                text-align: center;
              }
            }
          }
        }
      }
    }
  `}
`;
