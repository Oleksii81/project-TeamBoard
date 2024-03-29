import styled from 'styled-components';

export const BoardName = styled.h2`
  /* margin-bottom: 39px; */
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--addAnotherColumnBtnBgColor);
  position: absolute;
  top: 14px;
  left: 20px;
  @media screen and (min-width: 768px) {
    top: 26px;
    left: 32px;
  }
  @media screen and (min-width: 1440px) {
    top: 10px;
    left: 24px;
  }
`;

export const ColumnAddBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--addAnotherColumnBtnBgColor);
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 79px;
  min-width: 335px;
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;

export const SvgDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--plusButtonBackground);
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    stroke-width: 1px;
    stroke: var(--headerBgColor);
    width: 20px;
    height: 20px;
  }
`;
