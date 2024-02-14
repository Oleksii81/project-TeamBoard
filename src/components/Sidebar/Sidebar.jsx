import { SideBarMenu, Overlay } from './Sidebar.styled';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from './CreateBord/CreateBord';
import BoardsList from './BoardsList/BoardsList';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React from 'react';
import Card from '../../components/ScreensPage/Card/Card';

const SideBar = ({ isSidebarOpen, onCloseSideBar }) => {
  return (
    <>
      <Overlay
        className={` ${isSidebarOpen ? 'active' : ''}`}
        onClick={onCloseSideBar}
      />
      <SideBarMenu className={` ${isSidebarOpen ? 'active' : ''}`}>
        <LogoComponent />
        <CreateBord onCloseSideBar={onCloseSideBar} />
        <BoardsList />
        <NeedHelp onCloseSideBar={onCloseSideBar} />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
