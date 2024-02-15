import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ButtonAddCard = styled.button`
  border-radius: 8px;
  border: 0;
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 14px 88px;
  width: 334px;
  height: 56px;
  background-color: var(--addCardButtonBackground);
  cursor: pointer;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
  &:active {
    background-color: var(--createButtonHover);
  }
`;

export const MySvg = styled.svg`
  top: 9px;
  left: 9px;
  position: relative;
  display: flex;
  align-items: center;
  width: 10px;
  height: 10px;
`;

export const MyPath = styled.path`
  fill: white;
  position: absolute;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-weight: 500;
  line-height: 21px;
  font-size: 12px;
  letter-spacing: -0.02em;
`;

export const Btnsquare = styled.div`
  background-color: black;
  border-radius: 6px;
  width: 28px;
  height: 28px;
`;

export const OverlayModal = styled(ReactModal)`
  position: relative;
  padding: 24px;
  width: 350px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--popupBackground);
  border-radius: 8px;
  border: 1px solid var(--addCardButtonBackground);

  @media (max-width: 768px) {
    width: 335px;
  }
`;
