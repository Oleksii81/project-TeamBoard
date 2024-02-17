import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 350px;
  height: 486px;
  overflow-y: auto;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 648px;
  }
`;

export const ItemCardContainer = styled.div`
  width: 334px;
  height: 154px;
  border-radius: 8px;
  padding: 14px 20px;
  margin-bottom: 8px;
  background: var(--cardItem);
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  height: 21px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  height: 38px;
  margin-bottom: 14px;
`;

export const Line = styled.div`
  width: 290px;
  height: 1px;
  background: var(--primaryTextColor);
  opacity: 0.1;
  margin-bottom: 14px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: end;
`;

export const DetailName = styled.p`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  height: 12px;
  margin-bottom: 4px;
`;

export const DetailText = styled.p`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
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
  background-color: ${({ priority }) => {
    if (priority === 'low') return '#8FA1D0';
    if (priority === 'medium') return '#E09CB5';
    if (priority === 'high') return '#BEDBB0';
    return '#535353';
  }};
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
  stroke: var(--buttonColor);
  stroke-opacity: 0.6;
  cursor: pointer;

  &.bell {
    margin-right: 4px;
    stroke: var(--greenGreenBlueColor);
  }
`;

export const CurrentLine = styled.div`
  position: relative;
  width: 4px;
  height: 154px;
  border-radius: 4px 0 0 4px;
  left: -20px;
  top: -141px;
  background-color: ${({ priority }) => {
    if (priority === 'low') return '#8FA1D0';
    if (priority === 'medium') return '#E09CB5';
    if (priority === 'high') return '#BEDBB0';
    return '#535353';
  }};
`;
