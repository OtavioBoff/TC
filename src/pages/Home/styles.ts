import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    --tFirstChild: 40rem;
    --tSecondChild: 40rem;
    --tThirdChild: 8rem;
    --tFourthChild: 8rem;
    display: flex;
    justify-content: center;
    margin: auto;
    table {
      display: flex;
      flex-direction: column;
      color: ${theme.gray100};
      width: 90%;
      border-collapse: collapse;
      caption {
        display: block;
      }
      thead {
        color: inherit;
        tr {
          th:first-child {
            width: var(--tFirstChild);
          }
          th:first-child + th {
            width: var(--tSecondChild);
          }
          th:first-child + th + th {
            width: var(--tThirdChild);
          }
          th:first-child + th + th + th {
            width: var(--tFourthChild);
          }
          th {
            border: 1px solid white;
            text-decoration: none;
          }
        }
      }
      tbody {
        color: inherit;
        tr {
          td:first-child {
            width: var(--tFirstChild);
          }
          td:first-child + td {
            width: var(--tSecondChild);
          }
          td:first-child + td + td {
            width: var(--tThirdChild);
          }
          td:first-child + td + td + td {
            width: var(--tFourthChild);
          }
          td {
            input {
              /* padding-left: 0.5rem;
              align-content: center;
              width: 100%;
              border: 0;
              background: transparent;
              color: white; */
            }
          }
        }
      }
    }
  `}
`;
