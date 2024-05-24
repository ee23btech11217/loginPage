import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import './recruiterLogin.css'; 

function RecruiterLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && captcha) {
            // Your authentication logic here
            // Verify the captcha with your backend server
            // If captcha is verified, proceed with form submission
        } else {
            setErrorMessage('Please fill in all fields.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box className="recruiter-login-container"> {/* Add class name */}
                <Typography variant="h4" component="h2" gutterBottom>Recruiter Login</Typography>
                <form onSubmit={handleSubmit} className="recruiter-login-form"> {/* Add class name */}
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        className="textfield" 
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        className="textfield" 
                    />
                    <Box className="recruiter-login-captcha"> {/* Add class name */}
                        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptchaChange} />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '2rem' }}> {/* Adjust inline style */}
                        Login
                    </Button>
                    {errorMessage && <Typography className="recruiter-login-error">{errorMessage}</Typography>} {/* Add class name */}
                </form>
            </Box>
        </Container>
    );
}

export default RecruiterLogin;
