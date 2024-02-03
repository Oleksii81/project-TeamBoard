import styled from 'styled-components';

export const ContainerHelp = styled.div`
  /* background: var(--sidebarBgColor); */
  margin: 0;
  margin: 0;
  position: absolute;
  background: #1f1f1f;
  border-radius: 8px;
  width: 165px;
  height: 206px;
  padding: 16px;

  @media (min-width: 768px) {
    /* width: 192px;
    height: 272px;
    padding-left: 20px; */

    width: 176px;
    height: 240px;
    padding-left: 20px;
  }
`;

export const ImgHelp = styled.img`
  width: 54px;
  height: 78px;
`;

export const TextHelp = styled.p`
  margin-top: 0;
  /* margin-bottom: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em; */
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  letter-spacing: -0.02em;
  /* color: var(--sidebarBgColor); */
  /* padding: 106px 14px 52px 15px; */
  /* 
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.42857;
    padding-right: 43px;
  } */
`;

export const IconHelp = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  /* stroke: var(--logoIcon); */
  stroke: white;
`;

export const QuestionHelp = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  cursor: pointer;
  /* color: var(--needHelpBtn); */
  color: white;
`;

export const BtnNeedHelp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
