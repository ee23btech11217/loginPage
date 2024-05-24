// StudentLogin.js

import React from 'react';
import { Typography } from '@mui/material';
import GoogleLoginButton from './googleLogin';
import './studentLogin.css'; // Import the CSS file

function StudentLogin() {
    const responseMessage = (response) => {
        console.log('Student Login Success:', response);
        // Handle the login response
    };

    const errorMessage = (error) => {
        console.log('Student Login Failed:', error);
        // Handle login error
    };

    return (
        <div className="student-login-container"> {/* Apply the container class */}
            <Typography variant="h4" component="h2" gutterBottom className="student-login-title">Student Login</Typography> {/* Apply the title class */}
            <GoogleLoginButton onSuccess={responseMessage} onError={errorMessage} className="student-login-button" /> {/* Apply the button class */}
        </div>
    );
}

export default StudentLogin;
