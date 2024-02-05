// import AuthPage from "pages/AuthPage/AuthPage";
// import WelcomePage from "pages/WelcomePage/WelcomePage";
// import { Route, Routes } from "react-router";
import SideBar from '../../src/components/Sidebar/Sidebar';
import Header from '../../src/components/Header/Header';
import ScreensPage from '../../src/components/ScreensPage/ScreensPage';

export const App = () => {
  return (
    <>
      <SideBar styles={{ order: 2 }} />
      <div styles={{ display: 'flex', flexDirection: 'column' }}>
        <Header styles={{ order: 1 }} />
        <ScreensPage styles={{ order: 3 }} />
      </div>
    </>
    // <Routes>
    //   <Route path="/" element={<WelcomePage />} />
    //     <Route path="/auth/:id" element={<AuthPage />} />
    // </Routes>
  );
};
