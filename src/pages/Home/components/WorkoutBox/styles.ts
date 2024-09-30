import styled, { css } from "styled-components";

const clickableBoxBase = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 8px;
    color: ${theme.white};
    cursor: pointer;
  `}
`;

const spanBase = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: ${theme.white};
  `}
`;

export const Container = styled(clickableBoxBase)`
  ${({ theme }) => css`
    padding: 16px;
    gap: 16px;
    width: 80%;
    background: ${theme.gray700};
    &:hover {
      background: ${theme.gray600};
    }
    &:hover ${EditButton} {
      opacity: 1;
      pointer-events: auto;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: ${theme.gray300};
    cursor: pointer;
  `}
`;

export const EditButton = styled(clickableBoxBase)`
  ${({ theme }) => css`
    padding: 4px 8px;
    opacity: 0;
    pointer-events: none
    transition: opacity 0.3s ease; 
    cursor: pointer;
    color: ${theme.gray300};
    &:hover {
      color: ${theme.gray100};
    }
  `}
`;

export const WorkoutName = styled(spanBase)`
  font-size: 1.5rem;
`;
export const WorkoutGroupName = styled(clickableBoxBase)`
  font-size: 1rem;
  padding: 4px 8px;
  ${({ theme }) => css`
    background: ${theme.gray600};
    &:hover {
      background: ${theme.gray700};
    }s
  `}
`;
export const WorkoutGroup = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
`;
