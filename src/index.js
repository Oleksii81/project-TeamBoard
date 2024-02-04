import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from 'GlobalStyle';

import './fonts/Poppins-Medium.woff';
import './fonts/Poppins-Medium.woff2';
import './fonts/Poppins-Regular.woff';
import './fonts/Poppins-Regular.woff2';
import './fonts/Poppins-SemiBold.woff';
import './fonts/Poppins-SemiBold.woff2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/project-TeamBoard">
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
