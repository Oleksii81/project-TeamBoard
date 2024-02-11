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
  border-radius: 8px;
  padding: 14px 20px;
  margin-bottom: 8px;

  // background: var(--currentProjBgColor);
  background: white;
  cursor: pointer;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: black;
  height: 21px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: black;
  height: 38px;
  margin-bottom: 14px;
`;

export const Line = styled.div`
  width: 290px;
  height: 1px;
  background: rgba(22, 22, 22, 0.1);
  margin-bottom: 14px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: end;
`;

export const Detail = styled.div``;

export const DetailName = styled.p`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: grey;
  height: 12px;
  margin-bottom: 4px;
`;

export const DetailText = styled.p`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: black;
  height: 15px;
`;

export const DivFlex = styled.div`
  display: flex;
  gap: 4px;
`;

export const DetailCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  fill: none;
  stroke: black;
  stroke-opacity: 0.5;
  cursor: pointer;

  &.bell {
    margin-right: 4px;
    stroke: red;
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
