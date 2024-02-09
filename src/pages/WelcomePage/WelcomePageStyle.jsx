import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding-top: 166px;
  background-image: linear-gradient(to bottom, white, rgba(190, 219, 176, 1));
`;

export const StyledWelcomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  height: 438px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px){
    width: 335px;
  }
  @media screen and (min-width: 765px) {
    width: 473px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledImg = styled.img`
  @media screen and (max-width: 765px) {
    width: 124px;
    height: 124px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  height: 88px;
`

export const StyledLink = styled(NavLink)`
  color: #161616;
  text-decoration: none;
  padding: 14px 0 14px 0;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  &:hover {
    color: #fff;
    background: #161616;
    border-radius: 8px;
    width: 344px;
    height: 49px;
    text-align: center;
  }
  @media screen and (max-width: 765px) {
    &:hover{
      width: 335px;
    }
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0 24px 0;
  gap: 14px;
  height: 60px;

  @media screen and (max-width: 765px) {
    margin-top: 14px;
  }
`;

export const StyledSvg = styled.svg`
  @media screen and (max-width: 765px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledText = styled.h1`
  @media screen and (max-width: 765px) {
    font-size: 28px;
  }
`;