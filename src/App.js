// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Buttons from './features/buttons';
import StudentLogin from './features/studentLogin';
import RecruiterLogin from './features/recruiterLogin';

function App() {
  return (
    <Router>
      <div>
      <h2>Choose Your Role</h2>
      <Buttons />
      {window.location.pathname === '/student' && <StudentLogin />}
      {window.location.pathname === '/recruiter' && <RecruiterLogin />}
    </div>
    </Router>
  );
}

export default App;
