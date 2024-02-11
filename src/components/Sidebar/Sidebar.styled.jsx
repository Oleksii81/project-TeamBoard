import styled from 'styled-components';

export const SideBarMenu = styled.div`
  padding: 24px;
  width: 260px;
  height: 100vh;
  background-color: var(--sidebarBgColor);
  transition: transform 0.3s linear;
  display: flex;
  flex-direction: column;
  // overflow: auto;

  /* Tablet */
  // @media screen and (max-width: 767px) {
  @media screen and (max-width: 1439px) {
    top: 0;
    position: absolute;
    left: -260px;
    z-index: 100;
    &.active {
      transform: translateX(100%);
      z-index: 10;
    }
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    padding: 14px;
    max-width: 225px;
    width: 225px;
    left: -225px;
  }

  /* Desktop - Sidebar visible for screens larger than 1439px */
  @media screen and (min-width: 1439px) {
    left: 0;
    position: absolute;
  }

  /* @media screen and (min-height: 662px) {
    height: 100vh;
  } */
`;

export const ButtonBurger = styled.button`
  display: none;

  /* Tablet */
  @media screen and (max-width: 1439px) {
    border-color: transparent;
    width: 32px;
    height: 32px;
    background-color: var(--headerBgColor);
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: none;
  // overflow: auto;

  &.active {
    display: block;
    z-index: 9;
  }
`;
