// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from './slice/routesSlice';
import Buttons from './features/buttons';
import Login from './features/Login';
import RecruiterLogin from './features/recruiterLogin';
import HomePage from './features/homePage';
import './app.css';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentRoute = location.pathname;
  const [userEmail, setUserEmail] = useState('');

  const handleRouteChange = (route) => {
    dispatch(setCurrentRoute(route));
  };

  const handleLogin = (email) => {
    setUserEmail(email);
    handleRouteChange('/home');
  };

  return (
    <div className="container">
      {currentRoute !== '/home' && <Buttons onRouteChange={handleRouteChange} />}
      <Routes>
        <Route path="/home" element={<HomePage email={userEmail} />} />
        <Route path="/student" element={<Login role="Student" onLogin={handleLogin} />} />
        <Route path="/staff" element={<Login role="Staff" onLogin={handleLogin} />} />
        <Route path="/coordinator" element={<Login role="Coordinator" onLogin={handleLogin} />} />
        <Route path="/recruiter" element={<RecruiterLogin onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
