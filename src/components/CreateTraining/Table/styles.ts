import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    table {
      color: ${theme.gray100};
      width: 100%;
      border-collapse: collapse;
      caption {
        border: 1px solid ${theme.gray100};
      }
      thead {
        color: inherit;
        tr {
          th {
            border: 1px solid ${theme.gray100};
            text-decoration: none;
          }
        }
      }
      tbody {
        color: inherit;
        tr {
          gap: 1rem;
          td {
            border-right: 1px solid ${theme.gray100};
            border-left: 1px solid ${theme.gray100};
            input {
              border: 0;
              background: transparent;
              width: 100%;
              padding-left: 0.5rem;
              color: ${theme.white};
              box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
              &:focus {
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
