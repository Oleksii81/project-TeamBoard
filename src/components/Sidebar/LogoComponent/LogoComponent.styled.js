import styled from 'styled-components';

export const LogoComponentStyled = styled.div`
  margin-bottom: 60px;
  height: 32px;
  display: flex;
  gap: 8px;
  align-items: center;

  //Mobile
  @media screen and (max-width: 375px) {
    margin-bottom: 70px;
  }
`;

export const TaskPro = styled.span`
  font-weight: 600;
  line-height: 1.5;
  color: var(--createNewBoard);
`;

//Color logo
export const LogoPath = styled.path`
  fill: var(--logoBackground); // when adding a topic, swap places
`;
//Color Logo centeral
export const LogoPathCentral = styled.path`
  fill: var(--logoIcon); // when adding a topic, swap places
`;
