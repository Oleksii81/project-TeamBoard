import {
  SideBarMenu,
  Overlay,
} from './Sidebar.styled';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from './CreateBord/CreateBord';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React from 'react';

const SideBar = ({ isSidebarOpen, onCloseSideBar }) => {
  return (
    <>
      <Overlay
        className={` ${isSidebarOpen ? 'active' : ''}`}
        onClick={onCloseSideBar}
      />
      <SideBarMenu className={` ${isSidebarOpen ? 'active' : ''}`}>
         <LogoComponent />
        <CreateBord />
        <NeedHelp />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
