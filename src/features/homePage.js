// src/features/HomePage.js

import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, Box, Paper } from '@mui/material';
import './homePage.css';

const HomePage = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('email');
        setEmail('');
    };

    const handleSignIn = () => {
        window.location.href = "/"; // Navigate to "/"
    };

    return (
        <Container maxWidth="md" className="home-container">
            <Paper elevation={3} className="home-paper">
                <Box p={3}>
                    {email ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Welcome, {email}!
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={handleSignOut}
                                className="home-button"
                            >
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Please sign in to continue.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={handleSignIn}
                                className="home-button"
                            >
                                Sign In
                            </Button>
                        </>
                    )}
                    <Typography variant="body1" className="home-content">
                        This is the home page. We can add more content here.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default HomePage;
