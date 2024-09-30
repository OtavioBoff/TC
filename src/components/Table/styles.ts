import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: auto;
    overflow: auto;
    justify-content: space-between;
    table {
      width: 100%;
      border-collapse: collapse;
      color: ${theme.gray100};
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 1rem 0;
      background-color: ${theme.gray600};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      caption {
        div {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding-bottom: 8px;
        }
        width: 100%;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${theme.gray100};
      }
      thead {
        background-color: ${theme.gray600};
        color: ${theme.gray100};
        tr {
          th {
            padding: 0.75rem 1rem;
            border: none;
            font-size: 1rem;
            text-transform: uppercase;
          }
        }
      }
      tbody {
        tr {
          transition: background-color 0.1s ease;
          td {
            padding: 0.75rem 1rem;
            border-top: 1px solid ${theme.gray300};
            border-bottom: 1px solid ${theme.gray300};

            &:first-child {
              border-left: none;
            }

            &:last-child {
              border-right: none;
            }
          }
          &:hover {
            color: ${theme.white};
            background-color: ${theme.gray500};
          }
        }
      }
      tbody tr:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  `}
`;
export const TableArrows = styled.button`
  ${({ theme }) => css`
    border: 0;
    margin: 1rem;
    background: transparent;
    color: ${theme.white};
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    &:hover {
      color: ${theme.green500};
    }
  `}
`;
export const PageNumber = styled.span`
  ${({ theme }) => css`
    color: ${theme.gray100};
    text-align: center;
    font-size: 1rem;
  `}
`;

const baseButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.gray300};
    background: transparent;
    border: 0;
    align-content: center;
    &:hover {
      box-shadow: "0 0 0 2px white";
    }
  `}
`;

export const EditButton = styled(baseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.green500};
    }
  `}
`;
export const RemoveButton = styled(baseButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.red500};
    }
  `}
`;
