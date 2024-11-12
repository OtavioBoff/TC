import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const MiddleContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

    overflow: auto;
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
        width: 100%;
        font-size: 1.5rem;
        padding: 1rem;
        font-weight: bold;
        color: ${theme.gray100};
        text-transform: uppercase;
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
          }

          &:first-child {
            border-left: none;
          }

          &:last-child {
            border-right: none;
          }
        }
      }
    }
    tbody tr:last-child {
      td {
        border: none;
        width: 100%;
      }
    }
    tbody tr:last-child td:first-child {
      border-bottom-left-radius: 8px;
    }

    tbody tr:last-child td:last-child {
      border-bottom-right-radius: 8px;
    }
    .emptyPage {
      border: 0px;
      &:hover {
        color: ${theme.gray100};
        background-color: ${theme.gray800};
      }
    }
  `}
`;
export const TableArrows = styled.button`
  ${({ theme }) => css`
    border: 0;
    margin: 1rem;
    padding-top: 3.5rem;
    background: transparent;
    color: ${theme.gray300};
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

export const Footer = styled.div`
  display: flex;
  justify-content: end;
`;

const baseButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.gray300};
    background: transparent;
    border: 0;
    display: flex;
    flex-grow: 0;
    justify-content: center;
    align-items: center;
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

const baseSpan = styled.span`
  ${({ theme }) => css`
    color: ${theme.gray300};
    padding: 2rem;
    font-size: 1.5rem;
  `}
`;
export const PageIndex = styled(baseSpan)`
  text-align: end;
`;
export const WorkoutGroup = styled(baseSpan)`
  ${({ theme }) => css`
    text-align: center;
    padding: 1rem 2rem;
    color: ${theme.gray100};
    font-size: 2rem;
  `}
`;

export const EmptyPage = styled(baseSpan)`
  ${({ theme }) => css`
    color: ${theme.gray400};
    font-size: 2rem;
    text-align: center;
    height: 100%;
  `}
`;

export const AddButtonRow = styled.tr`
  ${() => css`
    background: transparent;
    width: 100%;
    cursor: pointer;
    transition: all 0.125s ease;
  `}
`;

// Estilização para o <td> que contém o botão
export const AddButtonCell = styled.td`
  ${({ theme }) => css`
    border: 0;
    padding: 12px 24px; // Adicione o padding aqui para centralizar o conteúdo
    text-align: center; // Centraliza o conteúdo dentro do <td>
    color: ${theme.gray300}; // Mantenha a cor aqui

    &:hover {
      background: ${theme.gray700};
      color: ${theme.green500}; // Mantenha a cor aqui
    }
  `}
`;
