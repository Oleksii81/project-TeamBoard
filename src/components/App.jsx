import AuthPage from "pages/AuthPage/AuthPage";
import WelcomePage from "pages/WelcomePage/WelcomePage";
import { Route, Routes } from "react-router";
import UserModalTest from "./UserModalTest";
import SideBar from '../../src/components/Sidebar/Sidebar';
import Header from '../../src/components/Header/Header';
import ScreensPage from '../../src/components/ScreensPage/ScreensPage';
export const App = () => {
  return (
    <>
      <>
        <SideBar />
        <ScreensPage />
        <Header />
        <UserModalTest />
      </>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
      </Routes>
    </>
  );
};
