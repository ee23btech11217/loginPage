import React from 'react';

function HomePage({ clientName, isLoggedIn, onSignOut }) {
    const handleSignOut = () => {
        // Call the sign-out function provided by the parent component
        onSignOut();
    };

    return (
        <div>
            <h1>Welcome, {clientName}!</h1>
            <p>This is your home page.</p>
            {/* Conditionally render the sign-out button if the user is signed in */}
            {isLoggedIn ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <button>Sign In</button>
            )}
        </div>
    );
}

export default HomePage;
