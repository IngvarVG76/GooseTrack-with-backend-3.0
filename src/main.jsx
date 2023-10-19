import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App.jsx';
import { persistor, store } from './redux/store.js';

import { GlobalStyle } from './styles/GlobalStyles.jsx';
import { Theme } from './styles/Theme/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/GooseTrack-with-backend-3.0">
          <Theme>
            <GlobalStyle />
            <App />
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
