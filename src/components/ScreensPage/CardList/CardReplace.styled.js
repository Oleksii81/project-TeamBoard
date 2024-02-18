import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
`;

export const ListColumn = styled.ul`
  min-width: 200px;
  min-height: 57px;
  padding: 18px;
  border-radius: 8px;
  background: var(--cardItem);
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
  position: absolute;
  left: -130px;
`;

export const ListFlex = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  height: 21px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);

  &.active {
    color: var(--greenGreenBlueColor);
  }

  &:hover {
    color: var(--greenGreenBlueColor);
  }
`;

export const IconCont = styled.div`
  margin-left: auto;
`;
