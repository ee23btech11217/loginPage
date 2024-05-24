import React from 'react';
import { Typography } from '@mui/material';
import GoogleLoginButton from './googleLogin';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = ({ role}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const responseMessage = (response) => {
    const token = response.credential; // Assuming the token is available in the response
    const decodedToken = jwtDecode(token); // Decode the JWT token
    const { email } = decodedToken; // Extract email from the decoded token
    console.log(`${role} Login Success:`, { email });

      navigate('/home'); 
      localStorage.setItem('email', email);
  };

  const errorMessage = (error) => {
    console.log(`${role} Login Failed:`, error);
    // Handle login error
  };

  return (
    <div className="login-container">
      <Typography variant="h4" component="h2" gutterBottom className="login-title">
        {role} Login
      </Typography>
      <GoogleLoginButton onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default Login;
