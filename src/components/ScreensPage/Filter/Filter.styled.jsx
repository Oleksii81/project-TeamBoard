import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
`;

export const Container = styled.dix`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 64px;
  height: 20px;

  position: absolute;
  top: 20px;
  right: 32px;

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
  left: -300px;
  top: 23px;

  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  width: 300px;
  height: 234px;
`;
