import styled, { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: flex;
    gap: 3rem;

    width: 90%;
    background: ${theme.gray600};
    margin: auto;
    padding: 2rem;
    border-radius: 8px;
    .arrows {
      background: transparent;
      justify-content: center;
      align-items: center;
      border: 0;
      height: 32px;
      color: ${theme.gray300};
      &:hover {
        color: ${theme.green500};
      }
    }
  `}
`;
export const Middle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    footer {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1rem;
      button {
        border: 0;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.75rem;
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
        width: 20%;
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
