// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <GoogleOAuthProvider clientId="204921228938-fs4gga739r0pg63f2gmipmo3kfn50qrs.apps.googleusercontent.com">
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
