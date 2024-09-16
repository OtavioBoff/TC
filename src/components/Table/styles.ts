import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 400px;
    overflow: auto;
  `}
`;
export const Middle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 80%;
    height: auto;
    justify-content: space-between;

    table {
      color: ${theme.gray100};
      border-collapse: collapse;

      caption {
        font-size: 1.25rem;
      }

      thead {
        color: inherit;

        tr {
          th {
            padding: 0.25rem 0.5rem;
            border: 1px solid ${theme.gray100};
            text-decoration: none;

            &:nth-child(1) {
              width: 15%;
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(3) {
              /* width: 20%; */
            }
          }
        }
      }

      tbody {
        color: inherit;

        tr {
          td {
            text-align: center;
            border-right: 1px solid ${theme.gray100};
            border-left: 1px solid ${theme.gray100};

            &:nth-child(1) {
              width: 10%;
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(3) {
              /* width: 20%; */
            }
          }
        }

        &:last-child {
          border-bottom: 2px solid ${theme.gray100};
        }
      }
    }

    button {
      background: transparent;
      align-items: center;
      border: 0;
      padding: 0;
      color: ${theme.gray300};

      &:focus {
        outline: 0;
      }

      &:hover {
        color: ${theme.green500};
      }
    }
  `}
`;
export const TableArrows = styled.button`
  ${({ theme }) => css`
    border: 0;
    margin: 1rem;
    background: transparent;
    height: 100%;
    color: ${theme.white};
    text-align: center;
    display: flex;
    justify-content: center;
    &:hover {
      color: ${theme.green500};
    }
  `}
`;
