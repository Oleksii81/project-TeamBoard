import styled from 'styled-components';

export const ContainerHelp = styled.div`
  background: var(--helpBgColor);
  margin: 0;
  margin-top: auto;
  border-radius: 8px;
  width: 197px;
  height: 238px;
  padding: 16px;
  margin-top: auto;

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
  color: var(--needHelpBtn);
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

export const Span = styled.span`
  color: var(--greenGreenBlueColor);
`;

export const IconHelp = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--needHelpBtn);
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
