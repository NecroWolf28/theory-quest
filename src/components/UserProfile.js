import React, { useEffect } from 'react';

const UserProfile = ({ username, score, attemptedQuestions, accuracy, onLogout }) => {
    // const [score, setScore] = useState(0);

    // Load score from localStorage if available
    useEffect(() => {
        // const savedScore = localStorage.getItem('score');
        // if (savedScore) {
        //     setScore(savedScore);
        // }
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('userName'); // Remove username from localStorage
        localStorage.removeItem('score'); // Remove score from localStorage
        localStorage.removeItem('attemptedQuestions');
        localStorage.removeItem('accuracy');
        onLogout(); // Call the parent function to reset the app state
    };

    return (
        <div className="user-profile">
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}><h2>Welcome, {username}!</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>

            <p>Your score: {score}</p>
            <p>Total questions: {attemptedQuestions}</p>
                <p>Accuracy: {accuracy}%</p>

            </div>
            );
            };

            export default UserProfile;
