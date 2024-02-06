import {
  SideBarMenu,
  ButtonBurger,
  Overlay,
  SvgBurger,
  BurgerPath,
} from './Sidebar.styled';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from './CreateBord/CreateBord';
import BoadrsList from './BoardsList/BoardsList';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React, { useState } from 'react';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <Overlay
        className={` ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />
      <SideBarMenu className={` ${isSidebarOpen ? 'active' : ''}`}>
        <ButtonBurger
          className={isSidebarOpen ? 'active' : ''}
          onClick={toggleSidebar}
        >
          <SvgBurger
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <BurgerPath d="M4 16h24" />
            <BurgerPath d="M4 8h24" />
            <BurgerPath d="M4 24h24" />
          </SvgBurger>
        </ButtonBurger>

        <LogoComponent />
        <CreateBord />
        <BoadrsList />
        <NeedHelp />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
