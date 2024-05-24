// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRoute } from './slice/routesSlice';
import Buttons from './features/buttons';
import StudentLogin from './features/studentLogin';
import RecruiterLogin from './features/recruiterLogin';
import { Typography } from '@mui/material';
import './app.css'; // Import the CSS file

function App() {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.routes.currentRoute);

  // Dispatch action to update current route
  const handleRouteChange = (route) => {
    dispatch(setCurrentRoute(route));
  };

  return (
    <Router>
      <div className="container"> 
        <Typography variant="h5" className="heading" gutterBottom>Choose Your Role</Typography> 
        <Buttons onRouteChange={handleRouteChange} />
        <Routes>
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/recruiter" element={<RecruiterLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
