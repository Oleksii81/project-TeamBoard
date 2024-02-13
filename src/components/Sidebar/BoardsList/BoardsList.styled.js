import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BoardsContainer = styled.div`
  position: relative;
  width: 260px;
  left: -24px;
  min-height: 61px;
  overflow-y: auto;
  margin-bottom: 40px;
  scrollbar-width: none;

  @media screen and (max-width: 375px) {
    width: 225px;
    left: -14px;
  }
`;

export const ItemContainer = styled(NavLink)`
  height: 61px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 20px 24px;
  margin-bottom: 4px;

  &:hover,
  &:active,
  & .activeBoard {
    background: var(--currentProjBgColor);
    /* cursor: pointer; */
  }

  &.active {
    background: var(--currentProjBgColor);

    & .activeBoardIcon {
      & svg {
        stroke: var(--createNewBoard);
      }
    }

    & .activeBoardTitle {
      color: var(--createNewBoard);
      opacity: 1;
    }

    & .activeBoardButton {
      display: block;
      stroke: var(--textBoardColor);
      cursor: pointer;
    }

    & .activeLine {
      background: var(--iconLogOut);
    }
  }
`;

export const Icon = styled.div`
  & svg {
    fill: none;
    stroke: var(--textBoardColor);
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  color: var(--textBoardColor);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  fill: none;
  stroke: none;
  display: none;
`;

export const CurrentLine = styled.div`
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 61px;
  position: absolute;
  left: 256px;

  @media screen and (max-width: 375px) {
    left: 221px;
  }
`;
