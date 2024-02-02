import styled from 'styled-components';

export const ContainerHelp = styled.div`
  position: absolute;
  background: #1f1f1f;

  border-radius: 8px;
  width: 197px;
  height: 238px;
  padding-left: 11px;

  @media (min-width: 768px) {
    width: 212px;
    height: 272px;
  }
`;

export const ImgHelp = styled.img`
  width: 54px;
  height: 78px;
  margin-top: 9px;
`;

export const TextHelp = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.42857;
  letter-spacing: -0.02em;
  color: white;
  padding-left: 5px;
  padding-right: 36px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.42857;
    padding-right: 43px;
  }
`;

// export const IconHelp = styled.svg`

// `

export const QuestionHelp = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  cursor: pointer;
  color: #fff;
`;
