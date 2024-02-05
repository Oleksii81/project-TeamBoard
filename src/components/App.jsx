import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';
import SideBar from './Sidebar/Sidebar';

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes> */}
      <SideBar />
    </>
  );
};
