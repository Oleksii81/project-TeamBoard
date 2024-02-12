import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  padding: 14px 20px 60px;
  /* overflow: scroll; */
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

    /* width: calc(-260px + 100vw);
    left: 260px; */

    top: 68px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 20px 36px;
  }
`;
