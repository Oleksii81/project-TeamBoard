import styled from 'styled-components';

export const ContainerHelp = styled.div`
  margin-top: auto;
  background: var(--helpBgColor);
  width: 212px;
  height: 65px;
  padding-left: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media(max-width:768px) {
    width: 197px;
    padding-top: 18px;

  }
`;

export const ImgHelp = styled.img`
  width: 54px;
  height: 78px;
  margin-top: 10px;
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
  padding-top: 15px;
  margin-bottom: 2px;
`;

export const ContainerText = styled.div`
   background-color: var(--helpBgColor);
    margin-top: -204px;
    width: 212px;
    margin-left: -20px;
    padding-left: 20px;
    border-radius: 8px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  @media(min-width:375px) and (max-width: 768px) {
    width: 197px;
  }
`;

export const BtnNeedHelp = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  cursor: pointer;
  
  &:hover + ${ContainerText} {
    display: block;

  }
`;