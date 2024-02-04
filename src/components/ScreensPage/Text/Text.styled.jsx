import styled from 'styled-components';

export const MainText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin-top: 292px;

  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
    margin-top: 408px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 281px;
  }
`;

export const ButtonCreate = styled.button`
  color: #bedbb0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 0 2px;
`;
