import {
  SideBarMenu,
  // ButtonBurger,
  Overlay,
  /*   SvgBurger,
  BurgerPath, */
} from './Sidebar.styled';
import LogoComponent from './LogoComponent/LogoComponent';
import CreateBord from '../../../src/components/Sidebar/CreateBord/CreateBord';
import BoadrsList from './BoardsList/BoardsList';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import React from 'react';

const SideBar = ({ isSidebarOpen, onCloseSideBar }) => {
  /*  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
*/
  /*  const closeSidebar = () => {
    isSidebarOpen = false;
  } */

  return (
    <>
      <Overlay
        className={` ${isSidebarOpen ? 'active' : ''}`}
        onClick={onCloseSideBar}
      />
      <SideBarMenu className={` ${isSidebarOpen ? 'active' : ''}`}>
        {/* <ButtonBurger
          className={isSidebarOpen ? 'active' : ''}
          onClick={toggleSidebar}
        >
          <BurgerPath d="M4 16h24" />
          <BurgerPath d="M4 8h24" />
          <BurgerPath d="M4 24h24" />
        </ButtonBurger>

        <LogoComponent />
        <CreateBord />
        {/* <BoadrsList /> */}
        <NeedHelp />
        <LogOut />
      </SideBarMenu>
    </>
  );
};

export default SideBar;
