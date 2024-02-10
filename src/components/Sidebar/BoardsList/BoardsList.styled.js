import styled from 'styled-components';

export const BoardsContainer = styled.div`
  position: relative;
  width: 260px;
  left: -24px;
  min-height: 61px;
  overflow-y: auto;
  margin-bottom: 40px;
  scrollbar-width: none;
`;

export const ItemContainer = styled.div`
  height: 61px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 20px 24px;
  margin-bottom: 4px;

  &:hover,
  &:active,
  &.activeBoard {
    background: var(--currentProjBgColor);
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  fill: none;
  stroke: var(--textBoardColor);

  &.activeBoardIcon {
    stroke: var(--createNewBoard);
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  color: var(--textBoardColor);

  &.activeBoardTitle {
    color: var(--createNewBoard);
    opacity: 1;
  }
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

  &.activeBoardButton {
    display: block;
    stroke: var(--textBoardColor);
    cursor: pointer;
  }
`;

export const CurrentLine = styled.div`
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 61px;
  position: absolute;
  left: 256px;

  &.activeLine {
    background: var(--iconLogOut);
  }
`;
