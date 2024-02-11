import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 350px;
  height: 478px;
  overflow-y: auto;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 640px;
  }
`;

export const ItemCardContainer = styled.div`
  width: 334px;
  height: 154px;
  display: flex;
  gap: 8px;
  //   align-items: center;
  padding: 14px 24px;

  &:hover,
  &:active {
    // background: var(--currentProjBgColor);
    background: white;
    cursor: pointer;
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

export const Description = styled.p``;

export const DetailsContainer = styled.div``;
export const Detail = styled.div``;

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

  @media screen and (max-width: 375px) {
    left: 221px;
  }
`;
