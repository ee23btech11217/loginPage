import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from './slice/routesSlice';
import Buttons from './features/buttons';
import Login from './features/Login';
import RecruiterLogin from './features/recruiterLogin';
import HomePage from './features/homePage';
import { Container, AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import './app.css';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    dispatch(setCurrentRoute(currentRoute));
  }, [currentRoute, dispatch]);

  return (
    <React.StrictMode>
      <Container maxWidth="lg" className="container">
        <AppBar position="static">
          <Toolbar>
            <Avatar alt="Logo" src="/ocs.jpg" sx={{ marginRight: 2 }} />
            {currentRoute !== '/home' ? (
              <Typography variant="h6" gutterBottom>
                OCS Login Page
              </Typography>
            ) : (
              <Typography variant="h6" gutterBottom>
                OCS Home Page
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <Box mt={2}>
          {currentRoute !== '/home' && (
            <Box className="buttons-container">
              <Buttons />
            </Box>
          )}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/student" element={<Login role="Student" />} />
            <Route path="/staff" element={<Login role="Staff" />} />
            <Route path="/coordinator" element={<Login role="Coordinator" />} />
            <Route path="/recruiter" element={<RecruiterLogin />} />
          </Routes>
        </Box>
      </Container>
    </React.StrictMode>
  );
}

export default App;
