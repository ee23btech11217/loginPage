import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRoute } from './slice/routesSlice';
import Buttons from './features/buttons';
import Login from './features/Login';
import RecruiterLogin from './features/recruiterLogin';
import './app.css';

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
        <Buttons onRouteChange={handleRouteChange} />
        <Routes>
          <Route path="/student" element={<Login role="Student" />} />
          <Route path="/staff" element={<Login role="Staff" />} />
          <Route path="/coordinator" element={<Login role="Coordinator" />} />
          <Route path="/recruiter" element={<RecruiterLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
