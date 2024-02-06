import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
`;

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
    stroke: rgba(255, 255, 255, 0.8);
  }
`;

export const FilterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.8);
`;

export const WindowContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;

  border: 1px solid rgba(190, 219, 176, 0.5);
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
    stroke: #fff;
  }
`;

export const FilterFormHeading = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 41px;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 14px;
  }
`;
