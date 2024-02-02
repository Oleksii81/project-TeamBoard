import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 770px;
  max-width: 1440px;
  padding-top: 166px;
  background-image: linear-gradient(to bottom, white, rgba(190, 219, 176, 1));
`;

export const StyledWelcomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 473px;
  height: 438px;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled(NavLink)`
  border-radius: 8px;
  width: 344px;
  height: 49px;
  color: #161616;
  text-decoration: none;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;

  &.hover {
    color: #fff;
    background: #161616;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0 8px 0;
  gap: 14px;
  height: 60px;
`