import AuthPage from 'pages/AuthPage/AuthPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
    </Routes>
  );
};
