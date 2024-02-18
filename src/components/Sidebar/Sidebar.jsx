import { SideBarMenu, Overlay } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from './CreateBord/CreateBord';
import BoardsList from './BoardsList/BoardsList';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React from 'react';
import Loader from 'components/Loader/Loader';
import { isRefreshing } from '../../redux/auth/authSelectors';
import { isLoading } from '../../redux/task/taskSelectors';

const SideBar = ({ isSidebarOpen, onCloseSideBar }) => {
  const spinner = useSelector(isLoading);
  const isRefresh = useSelector(isRefreshing);
  return isRefresh || spinner ? (
    <Loader />
  ) : (
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
