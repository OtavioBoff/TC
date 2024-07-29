import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    width: 90%;
    background: ${theme.gray600};
    margin: 1rem;
    padding: 2rem;
    border-radius: 8px;

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
