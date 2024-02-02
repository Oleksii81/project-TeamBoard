import WelcomePage from "pages/WelcomePage/WelcomePage";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
  );
};
