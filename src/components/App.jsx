// import AuthPage from 'pages/AuthPage/AuthPage';
// import WelcomePage from 'pages/WelcomePage/WelcomePage';
// import { Route, Routes } from 'react-router';

import Sidebar from '../../src/components/Sidebar/Sidebar';
import Header from '../../src/components/Header/Header';
import ScreensPage from '../../src/components/ScreensPage/ScreensPage';

export const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <ScreensPage />
    </>
    // <Routes>
    //   <Route path="/" element={<WelcomePage />} />
    //   <Route path="/auth/:id" element={<AuthPage />} />
    // </Routes>
  );
};
