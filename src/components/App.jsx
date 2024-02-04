import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route} from 'react-router';

export const App = () => {
  return (<>
    
      <Route>
        <Route path="/" element={<WelcomePage />} />
      </Route>
  </>

  );
};
