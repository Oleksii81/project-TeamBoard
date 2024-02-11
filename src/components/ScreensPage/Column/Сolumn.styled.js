import styled from '@emotion/styled';

export const BoardItem = styled.li`
  position: relative;
  display: flex;
  overflow-y: auto;
  align-items: center;
  justify-content: space-between;
  width: 335px;
  max-height: 500px;
  margin-bottom: 10px;
  padding: 18px 20px 17px;
  cursor: pointer;
  text-align: left;
  letter-spacing: -0.02em;
  color: var(--column-text-color);
  border-radius: 8px;
  background-color: var(--column-background-color);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(24 / 14);
`;

export const ProgName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconProgect = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--sidebar-icon-stroke-color);
`;

export const IconEditCustom = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const IconEdit = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  stroke: var(--column-icon-edit-stroke-color);
  fill: none;
  &:hover {
    stroke: var(--plus-button-color);
    filter: drop-shadow(0 0 7px var(--plus-button-color));
  }
`;
