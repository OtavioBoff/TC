import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    --tFirstChild: 40%;
    --tSecondChild: 40%;
    --tThirdChild: 10%;
    --tFourthChild: 10%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    width: 90%;
    background: ${theme.gray600};
    margin: 1rem;
    padding: 2rem;
    border-radius: 8px;

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
            border-right: 1px solid white;
            border-left: 1px solid white;
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
    footer {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 0.5rem;
      button {
        border: 0;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        align-items: center;
        padding: 0.25rem;
      }
      #add {
        width: 100%;
        color: ${theme.white};
        background: ${theme.green500};
        &:hover {
          background: ${theme.green300};
          color: ${theme.gray900};
        }
      }
      #save {
        width: 30%;
        color: ${theme.white};
        background: ${theme.green500};
        &:hover {
          background: ${theme.green300};
          color: ${theme.gray900};
        }
      }
    }
  `}
`;
