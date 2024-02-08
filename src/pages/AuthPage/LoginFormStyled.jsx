import { ErrorMessage, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinks = styled.div`
  padding-top: 40px;
`;
export const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  margin-left: 14px;

  &.active {
    color: #fff;
  }
`;
export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;

  border-radius: 8px;
  width: 424px;
  height: 332px;
  background: #151515;
`;

export const StyledFilds = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 24px;
  position: relative;
  width: 344px;
  gap: 14px;
`;

export const Input = styled(Field)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  /* width: 344px; */
  height: 49px;
  padding-left: 18px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  background: #1f1f1f;
  opacity: 0.4;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;

  &:hover,
  &:focus {
    border: 1px solid #bedbb0;
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  background: #bedbb0;
  border-radius: 8px;
  width: 344px;
  height: 49px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #9dc888;
  }
`;

export const StyledSvg = styled.span`
  position: absolute;
  right: 18px;
  bottom: 15px;
  height: 18px;
  cursor: pointer;
`;

export const EmailErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 49px;
  left: 8px;
  font-size: 12px;
  color: red;
`;

export const PassErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 112px;
  left: 8px;
  font-size: 12px;
  color: red;
`;