import AuthPage from 'pages/AuthPage/AuthPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage/HomePage';

// import SideBar from '../../src/components/Sidebar/Sidebar';
// import Header from '../../src/components/Header/Header';
// import ScreensPage from '../../src/components/ScreensPage/ScreensPage';

export const App = () => {
  return (
    // <>
    //   <SideBar />
    //   <ScreensPage />
    //   <Header />
    // </>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
