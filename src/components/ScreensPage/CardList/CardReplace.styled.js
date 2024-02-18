import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
`;

export const ListColumn = styled.ul`
  min-width: 100px;
  min-height: 57px;
  padding: 18px;
  border-radius: 8px;
  background: var(--cardItem);
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
  position: absolute;
  left: -60px;
`;

export const ListFlex = styled.li`
  display: flex;
  gap: 8px;
`;

export const Title = styled.p`
  // display: inline-block;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  height: 21px;
  margin-bottom: 8px;

  &.active {
    color: var(--greenGreenBlueColor);
  }
`;
