import styled from "styled-components";
import ReactModal from 'react-modal';

export const OverlayModal = styled(ReactModal)`
  position: relative;
  border: 1px solid var(--addCardButtonBackground); 
   border-radius: 8px;
  width: 335px;
  height: 433px;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 0%;
  z-index: 1000;
`

export const ModalContainerHelp = styled.div`
  background-color: var(--popupBackground);
  border-radius: 8px;
  z-index: 20;
  position: fixed;
  padding-top: 23px;
  width: 400px;
  height: 355px;

  @media (max-width: 768px) {
    width: 335px;
  }
`;

export const FormHelp = styled.form`
  display: inline-block;
`;

export const ModalTitleHelp = styled.h2`
  margin-left: 24px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;

export const InputHelp = styled.input`
  border: 1px solid var(--greenGreenBlueColor);
  border-radius: 8px;
  background-color: var(--popupBackground);
  width: 352px;
  height: 49px;
  margin-left: 24px;
  margin-right: 24px;
  padding-left: 15px;
  color: var(--primaryTextColor);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--secondaryTextColor);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 287px;
  }
`;

export const CommentHelp = styled.textarea`
  border: 1px solid var(--greenGreenBlueColor);
  height: 120px;
  border-radius: 8px;
  background-color: black;
  background-color: var(--popupBackground);
  width: 352px;
  height: 120px;
  margin: 14px 24px 0 24px;
  resize: none;
  padding-left: 15px;
  padding-top: 14px;
  color: var(--primaryTextColor);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--secondaryTextColor);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 287px;
  }
`;

export const BtnSendHelp = styled.button`
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;
  width: 352px;
  height: 49px;
  margin: 24px;
  background-color: var(--greenGreenBlueColor);
  border: none;

  @media (max-width: 768px) {
    width: 287px;
  }
`;

export const IconHelp = styled.svg`
  position: relative;
  left: 370px;
  bottom: 34px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--buttonColor);

  @media (max-width: 768px) {
    left: 305px;
  }
`;