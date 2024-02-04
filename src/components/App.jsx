import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';
import Header from './Header/Header';
import SideBar from './Sidebar/Sidebar';
// import SideBar from './Sidebar/Sidebar';

export const App = () => {
  return (<>
    
      <Route>
        <Route path="/" element={<WelcomePage />} />
      </Route>
      <SideBar />
  </>

  );
};
