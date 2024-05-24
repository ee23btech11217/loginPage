// StudentLogin.js
import React from 'react';
import GoogleLoginButton from './googleLogin';

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
        <div>
            <h2>Student Login</h2>
            {/* Your student login form */}
            <GoogleLoginButton onSuccess={responseMessage} onError={errorMessage} />
        </div>
    );
}

export default StudentLogin;
