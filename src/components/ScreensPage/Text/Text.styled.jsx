import styled from 'styled-components';

export const MainText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 335px;
  position: absolute;

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
