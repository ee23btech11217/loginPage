// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store

ReactDOM.render(
  <GoogleOAuthProvider clientId="204921228938-fs4gga739r0pg63f2gmipmo3kfn50qrs.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
