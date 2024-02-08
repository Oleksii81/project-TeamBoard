import Header from 'components/Header/Header';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';



const HomePage = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
    return (
        <>
        <Sidebar isSidebarOpen={isSidebarOpen} onCloseSideBar={closeSidebar}/>
        <Header  toggleSidebar={toggleSidebar}/>
        <ScreensPage />
          
        </>
      );
}

export default HomePage;