import {
  SideBarMenu,
  Overlay,
} from './Sidebar.styled';
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
        <NeedHelp />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
