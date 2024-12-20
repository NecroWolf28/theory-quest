import React from 'react';

const UserProfile = ({ username, score, attemptedQuestions, accuracy, onLogout }) => {
    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('score');
        localStorage.removeItem('attemptedQuestions');
        localStorage.removeItem('accuracy');
        onLogout();
    };

    let accuracyMessage = '';
    if (accuracy === 100) {
        accuracyMessage = 'Perfect score! Well done!';
    } else if (accuracy >= 80) {
        accuracyMessage = 'Great job! Almost there!';
    } else if (accuracy >= 50) {
        accuracyMessage = 'Nice try! Keep practicing!';
    } else if (accuracy >= 25) {
        accuracyMessage = 'Don\'t worry, keep going! You\'ll get better!';
    } else {
        if (attemptedQuestions > 0) {
            accuracyMessage = 'Bruh.';
        }
    }

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
                <h4>{accuracyMessage}</h4>
            </div>
        </div>
    );
};

export default UserProfile;
