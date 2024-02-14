import styled from 'styled-components';

export const TextContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  padding: 14px 20px 60px;
  overflow-y: auto;
  z-index: 0;
  width: 100%;
  height: calc(-60px + 100vh);

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 375px) {
    width: 100%;
    height: calc(-60px + 100vh);
  }

  @media screen and (min-width: 768px) {
    padding: 26px 32px 96px;

    top: 68px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 20px 36px;
    width: calc(-260px + 100vw);
    left: 260px;
  }
`;

export const MainText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 335px;

  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--secondaryTextColor);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
    width: 486px;
  }
  @media screen and (min-width: 1440px) {
    left: auto;
  }
`;

export const ButtonCreate = styled.button`
  color: var(--needHelpLink);
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 0 2px;
`;
