import styled from 'styled-components';

export const ContainerHelp = styled.div`
  background: var(--themeListBgColor);
  margin: 0;
  position: absolute;
  border-radius: 8px;
  width: 197px;
  height: 238px;
  padding: 16px;

  @media (min-width: 768px) {
    width: 212px;
    height: 272px;
    padding-left: 20px;
  }
`;

export const ImgHelp = styled.img`
  width: 54px;
  height: 78px;
`;

export const TextHelp = styled.p`
  width: 163px;
  margin-top: 14px;
  color: var(--primaryTextColor);
  font-size: 12px;
  line-height: 1.34;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    width: 164px;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.28px;
  }
`;

export const IconHelp = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--logoIcon);
`;

export const QuestionHelp = styled.span`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  cursor: pointer;
  color: var(--needHelpBtn);
  padding-top: 19px;
`;

export const BtnNeedHelp = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;