import styled from 'styled-components';

export const SideBarMenu = styled.div`
  padding: 24px;
  width: 260px;
  height: 100%;
  background-color: var(--sidebarBgColor);
  transition: transform 0.3s linear;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* overflow: auto; */

  // Tablet
  @media screen and (max-width: 767px) {
    top: 0;
    /* overflow: auto; */
    position: fixed;
    left: -310px;
    z-index: 100;
    &.active {
      transform: translateX(100%);
      z-index: 10;
    }
  }
  // Mobile
  @media screen and (max-width: 375px) {
    max-width: 225px;
    width: 225px;
    left: -275px;
  }
`;

export const ButtonBurger = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
    background-color: var(----headerBgColor);
    display: block;
    position: fixed;
    top: 18px;
    left: 32px;
    z-index: 100;
    &.active {
      display: none;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: none;
  display: none;

  &.active {
    display: block;
    z-index: 9; // Помещаем поверх сайдбара
  }
`;

export const SvgBurger = styled.svg`
  position: fixed;
  top: 18px;
  left: 32px;
`;
