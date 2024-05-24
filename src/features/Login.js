import React from 'react';
import { Typography } from '@mui/material';
import GoogleLoginButton from './googleLogin';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import './Login.css';

const Login = ({ role }) => {
  const responseMessage = (response) => {
    const token = response.credential; // Assuming the token is available in the response
    const decodedToken = jwtDecode(token); // Decode the JWT token
    const { name, email } = decodedToken; // Extract name and email from the decoded token
    console.log(`${role} Login Success:`, { name, email });
    // Handle the login response
    // console.log(response);
  };

  const errorMessage = (error) => {
    console.log(`${role} Login Failed:`, error);
    // Handle login error
  };

  return (
    <div className={`login-container`}>
      <Typography variant="h4" component="h2" gutterBottom className={`login-title`}>
        {role} Login
      </Typography>
      <GoogleLoginButton onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default Login;
