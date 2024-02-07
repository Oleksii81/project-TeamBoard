import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Header = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  margin: 0 0 24px 0;
  padding: 0;
`;

export const Input = styled(Field)`
  border: 1px solid var(--greenGreenBlueColor);
  border-radius: 8px;
  width: 100%;
  height: 49px;
  // box-shadow: 0 4px 16px 0 var(--themeTitleTextColor);
  background: var(--popupBackground);
  opacity: 0.4;
  margin-bottom: 24px;
  padding: 0 18px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;

export const IconsHeaderIcons = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  margin: 0 0 14px 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;
  margin: 0 0 24px 0;
  padding: 0;

  svg {
    stroke-width: 1.5px;
    stroke: var(--iconCardColor);
    fill: transparent;
  }

  .icons-field {
    display: none;
  }

  input:checked + svg {
    stroke: var(--primaryTextColor);
  }
`;

export const HeaderBackground = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  margin: 0 0 14px 0;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  flex-wrap: wrap;
  margin: 0 0 40px 0;
  stroke-width: 1px;
  stroke: var(--defaultAvatarBgColor);
  width: 252px;

  .background-field {
    display: none;
  }

  input:checked + img {
    border: 2px solid var(--defaultAvatarBgColor);
    border-radius: 6px;
  }
`;

export const BoardCreateBtn = styled.button`
  border-radius: 8px;
  border-color: transparent;
  width: 100%;
  height: 49px;
  margin-left: auto;
  margin-right: auto;
  background: var(--addCardButtonBackground);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--addCardButtonColor);

  svg {
    stroke-width: 1px;
    stroke: var(--addPlusIconColor);
  }
`;

export const ModalForm = styled(Form)`
  padding: 24px;
  position: relative;
  background: var(--popupBackground);
`;

export const SvgCloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 14px;
  top: 14px;

  svg {
    stroke-width: 1.5px;
    stroke: var(--buttonColor);
    width: 18px;
    height: 18px;
  }
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
`;

export const SubmitSvgWrapper = styled.div`
  width: 28px;
  height: 28px;
  background-color: var(--addCardButtonColor);
  border-radius: 6px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  padding: 0;
  margin-bottom: 7px;
  font-size: 10px;
`;
