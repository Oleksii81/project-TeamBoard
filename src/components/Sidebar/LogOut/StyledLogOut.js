import styled from 'styled-components';

export const StyledImg = styled.div`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--iconLogOut);
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  gap: 14px;
  width: 110px;

  font-weight: 500;
  font-size: 16px;
  color: var(--createNewBoard);
  cursor: pointer;
`;
