
import styled from 'styled-components';

export const ModalContainerHelp = styled.div`
  background-color: var(--themeListBgColor);
  border-radius: 8px;
  z-index: 20;
  position: fixed;
  padding-top: 23px;
  width: 400px;
  height: 355px;

  @media (max-width: 768px) {
    width: 339px;
    margin-right: 43px;
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
  border: 1px solid var(--needHelpBtn);
  border-radius: 8px;
  background-color: var(--helpBgColor);
  width: 352px;
  height: 49px;
  margin-left: 24px;
  margin-right: 24px;
  padding-left: 15px;
  color: white;
  color: var(--primaryTextColor);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
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
  background-color: var(--helpBgColor);
  width: 352px;
  height: 120px;
  margin: 14px 24px 0 24px;
  padding-left: 15px;
  padding-top: 14px;
  color: white;
  color: var(--primaryTextColor);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
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
  cursor: pointer;
  width: 352px;
  height: 49px;
  margin: 24px;
  background-color: var(--greenGreenBlueColor);

  @media (max-width: 768px) {
    width: 307px;
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
  stroke: var(--logoIcon);

  @media (max-width: 768px) {
    left: 313px;
  }
`;