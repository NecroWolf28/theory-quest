import React, { useState } from 'react';
import './App.css';
import UserNameForm from './components/UserNameForm';

const App = () => {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || '');
    const [score, setScore] = useState(localStorage.getItem("score") || 0);
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = (name) => {
        setUserName(name);
        setQuizStarted(true);
    };

    const resetProfile = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("score");
        setUserName('');
        setScore(0);
        setQuizStarted(false);
    };

    const increaseScore = () => {
        const newScore = parseInt(score) + 1;
        localStorage.setItem("score", newScore);
        setScore(newScore);
    };

    return (
        <div className="App">
            {!quizStarted ? (
                <UserNameForm onSubmit={startQuiz} />
            ) : (
                <div className="quiz-container">
                    <div className="user-profile">
                        <h3>{userName}</h3>
                        <p>Score: {score}</p>
                        <button className="logout-button" onClick={resetProfile}>Logout</button>
                    </div>

                    <div className="question-container">
                        <h5>Question: What is the value of C in a major scale?</h5>
                        <div className="option" onClick={increaseScore}>C is the first note</div>
                        <div className="option">C is the fifth note</div>
                        <div className="option">C is the third note</div>
                        <div className="option">C is the second note</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
