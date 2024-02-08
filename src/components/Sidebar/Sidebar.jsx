import {
  SideBarMenu,
  Overlay,
} from './Sidebar.styled';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React from 'react';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from './CreateBord/CreateBord';
import BoardsList from './BoardsList/BoardsList';

const SideBar = ({ isSidebarOpen, onCloseSideBar }) => {
  return (
    <>
      <Overlay
        className={` ${isSidebarOpen ? 'active' : ''}`}
        onClick={onCloseSideBar}
      />
      <SideBarMenu className={` ${isSidebarOpen ? 'active' : ''}`}>
        <LogoComponent/>
        <CreateBord/>
        <BoardsList/>
        <NeedHelp />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
