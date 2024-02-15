import styled from 'styled-components';

export const ContainerForBtnandColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18px;

  width: 100%;
`;

export const ContainerMain = styled.div`
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 320px) {
    background-image: ${props =>
      props.background !== '' &&
      `url("${props.background.background_mobile_jpeg_1x}")`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== '' &&
        `url("${props.background.background_mobile_jpeg_2x}")`};
    }
  }

  @media screen and (min-width: 768px) {
    background-image: ${props =>
      props.background !== '' &&
      `url("${props.background.background_tablet_jpeg_1x}")`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== '' &&
        `url("${props.background.background_tablet_jpeg_2x}")`};
    }
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 260px);
    background-image: ${props =>
      props.background !== '' &&
      `url("${props.background.background_decktop_jpeg_1x}")`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== '' &&
        `url("${props.background.background_decktop_jpeg_2x}")`};
    }
  }

  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  gap: 18px;

  position: absolute;
  top: 60px;
  left: 0;
  padding: 74px 20px 60px;
  overflow-y: hidden;
  overflow-x: auto;
  z-index: 0;
  width: 100%;
  height: calc(-60px + 100vh);

  @media screen and (min-width: 375px) {
    height: calc(-60px + 100vh);
  }

  @media screen and (min-width: 768px) {
    padding: 80px 32px 96px;
    top: 68px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 24px 36px;
    width: calc(100% - 260px);

    left: 260px;
  }
`;
