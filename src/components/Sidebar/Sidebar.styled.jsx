import styled from 'styled-components';

export const SideBarMenu = styled.div`
  padding: 24px;
  width: 260px;

  height: 100vh;
  //background-color: var(--sidebarBgColor); // when adding a topic, swap places
  background-color: purple; // when adding a topic, swap places
  transition: transform 0.3s linear;
  display: flex;
  flex-direction: column;
  height: 100vh;

  // Tablet
  @media screen and (max-width: 768px) {
    top: 0;
    /* overflow: auto; */
    position: fixed;
    left: -260px;
    z-index: 100;
    &.active {
      transform: translateX(100%);
      z-index: 10;
    }
  }
  // Mobile
  @media screen and (max-width: 375px) {
    padding: 14px;
    max-width: 225px;
    width: 225px;
    left: -225px;
  }
`;

export const ButtonBurger = styled.button`
  display: none;

  //Tablet
  @media screen and (max-width: 768px) {
    border-color: transparent;
    width: 32px;
    height: 32px;
    background-color: var(--headerBgColor); // when adding a topic, swap place
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
  /* background-color: none; */
  background-color: rgba(236, 237, 253, 1); // when adding a topic, swap place
  display: none;

  &.active {
    display: block;
    z-index: 9; // Помещаем поверх сайдбара
  }
`;

export const SvgBurger = styled.svg`
  width: 32px;
  height: 32px;
  position: fixed;
  top: 18px;
  left: 32px;
  stroke: var(--iconPlusColor);
  stroke: black; //when adding a topic, swap place
  @media screen and (max-width: 375px) {
    width: 24px;
    height: 24px;
  }
`;

export const BurgerPath = styled.path`
  stroke-linecap: round;
  stroke-miterlimit: 4;
  stroke-width: 2.5;
`;
