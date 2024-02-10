import AuthPage from 'pages/AuthPage/AuthPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
