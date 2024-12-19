import React, { useState, useEffect } from 'react';

const UserProfile = ({ username, onLogout }) => {
    const [score, setScore] = useState(0);

    // Load score from localStorage if available
    useEffect(() => {
        const savedScore = localStorage.getItem('score');
        if (savedScore) {
            setScore(savedScore);
        }
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('userName'); // Remove username from localStorage
        localStorage.removeItem('score'); // Remove score from localStorage
        onLogout(); // Call the parent function to reset the app state
    };

    return (
        <div className="user-profile">
            <h2>Welcome, {username}!</h2>
            <p>Your score: {score}</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;
