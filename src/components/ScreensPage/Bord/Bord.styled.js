import styled from 'styled-components';

export const ContainerMain = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;

  position: absolute;
  top: 60px;
  left: 0;
  padding: 74px 20px 60px;
  overflow-y: scroll;
  z-index: 0;
  width: 100%;
  height: calc(-60px + 100vh);

  @media screen and (min-width: 375px) {
    width: 100%;
    height: calc(-60px + 100vh);
  }

  @media screen and (min-width: 768px) {
    padding: 80px 32px 96px;
    width: 100%;
    top: 68px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 24px 36px;
    width: calc(-260px + 100vw);

    left: 260px;
  }
`;
