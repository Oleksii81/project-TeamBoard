import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} onCloseSideBar={closeSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <Outlet />
    </>
  );
};

export default HomePage;
