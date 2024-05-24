import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import './recruiterLogin.css';

function RecruiterLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && captcha) {
            console.log(`Recruiter Login Success:`, { email });
            navigate('/home');
            localStorage.setItem('email', email);
        } else {
            setErrorMessage('Please fill in all fields.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box className="recruiter-login-container">
                <Typography variant="h4" component="h2" gutterBottom className="recruiter-login-title">
                    Recruiter Login
                </Typography>
                <form onSubmit={handleSubmit} className="recruiter-login-form">
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
                    <Box className="recruiter-login-captcha">
                        <ReCAPTCHA className="g-recaptcha" sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptchaChange} />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" className="recruiter-login-button">
                        Login
                    </Button>
                    {errorMessage && (
                        <Typography className="recruiter-login-error">
                            {errorMessage}
                        </Typography>
                    )}
                </form>
            </Box>
        </Container>
    );
}

export default RecruiterLogin;
