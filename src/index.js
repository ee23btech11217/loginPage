// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

ReactDOM.render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
