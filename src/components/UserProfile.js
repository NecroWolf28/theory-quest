import React from 'react';

const UserProfile = ({ username, score, attemptedQuestions, accuracy, onLogout }) => {
    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('score');
        localStorage.removeItem('attemptedQuestions');
        localStorage.removeItem('accuracy');
        onLogout();
    };

    return (
        <div className="user-profile">
            <div className="profile-header">
                <h2>Welcome, {username}!</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>

            <div className="profile-info">
                <p><strong>Your score:</strong> {score}</p>
                <p><strong>Total questions:</strong> {attemptedQuestions}</p>
                <p><strong>Accuracy:</strong> {accuracy}%</p>
            </div>
        </div>
    );
};

export default UserProfile;
