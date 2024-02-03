import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Header = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 24px 0;
  padding: 0;
`;

export const Input = styled(Field)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 287px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  background: #1f1f1f;
  opacity: 0.4;
  margin-bottom: 24px;
  padding: 0 18px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const IconsHeaderIcons = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
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
    stroke: rgba(255, 255, 255, 0.5);
  }

  .icons-label {
    position: relative;
    cursor: pointer; /* Add cursor style for better user interaction */

    ${Field} {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }
`;

export const HeaderBackground = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 14px 0;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 4px;
  flex-wrap: wrap;
  margin: 0 0 40px 0;
  stroke-width: 1px;
  stroke: #fff;
`;

export const BoardSubmitBtn = styled.button`
  border-radius: 8px;
  width: 287px;
  height: 49px;
  margin-left: auto;
  margin-right: auto;
  background: #bedbb0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
`;

export const ModalForm = styled(Form)`
  padding: 24px;
  position: relative;
`;

export const SvgCloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 14px;
  top: 14px;

  svg {
    stroke-width: 1.5px;
    stroke: #fff;
    width: 18px;
    height: 18px;
  }
`;
