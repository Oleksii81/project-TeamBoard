import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 64px;
  height: 20px;
  cursor: pointer;

  position: absolute;
  top: 14px;
  right: 20px;
  transition: 250ms opacity ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    top: 14px;
    right: 24px;
  }

  svg {
    stroke-width: 1.5px;
    stroke: var(--themeTitleTextColor);
  }
`;

export const FilterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--themeTitleTextColor);
`;

export const WindowContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;
  background-color: var(--popupBackground);

  border: 1px solid var(--modalGorizontalBorderColor);
  border-radius: 8px;
  width: 300px;
  height: 234px;
  padding: 24px;

  z-index: 999;
`;

export const FilerModalBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    stroke-width: 1.5px;
    stroke: var(--primaryTextColor);
  }
`;

export const FilterFormHeading = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 41px;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: var(--modalGorizontalBorderColor);
    margin-bottom: 14px;
  }
`;
