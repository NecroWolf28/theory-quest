import React, { useState, useEffect } from "react";
import Quiz from "./quizzes/Quiz";
import QuizSelector from "./components/QuizSelector";
import quizData from "./quizzes/questions/quizData"; // Import the original quiz data
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserNameForm from "./components/UserNameForm";

const shuffleArray = (array) => {
    return array
        .map((item) => ({
            ...item,
            options: item.options
                .map((option) => ({ option, sort: Math.random() })) // Shuffle options
                .sort((a, b) => a.sort - b.sort) // Sort options randomly
                .map(({ option }) => option), // Return shuffled options
        }))
        .sort(() => Math.random() - 0.5); // Shuffle questions themselves
};

const App = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [finalScore, setFinalScore] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [questionsAttempted, setQuestionsAttempted] = useState(null);
    const [accuracy, setAccuracy] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("userName");
        const storedScore = localStorage.getItem("userScore");
        if (storedScore) {
            setUserScore(parseInt(storedScore, 10));
        }
        if (storedUsername) {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }
    }, []);

    const handleUsernameSubmit = (name) => {
        setUsername(name);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername("");
        setIsLoggedIn(false);
        setUserScore(0); // Optionally reset score
        setQuestionsAttempted(0);
        setAccuracy(0);
        localStorage.removeItem("userName");
        localStorage.removeItem("userScore");
        localStorage.removeItem("questionsAttempted");
        localStorage.removeItem("accuracy");
    };

    const handleQuizSelection = (quizKey) => {
        const qns = quizData[quizKey]; // Select the quiz based on the key
        setFinalScore(null);
        setShuffledQuestions(shuffleArray(qns).splice(0, 10)); // Shuffle the quiz data and keep the max questions to 10
        setSelectedQuiz(quizKey);
    };

    const handleQuizCompletion = (score) => {
        setFinalScore(score);
        // const updatedUserScore = userScore + score;
        // setUserScore(updatedUserScore);
        // localStorage.setItem("userScore", updatedUserScore);
        setSelectedQuiz(null);
    };

    // const handleScoreUpdate = (increment) => {
    //     const updatedScore = userScore + increment;
    //     setUserScore(updatedScore);
    //     localStorage.setItem("userScore", updatedScore);
    // };

    const handleQuestionCompleted = (isCorrect) => {
        const updatedQuestions = (questionsAttempted || 0) + 1; // Increment attempted questions
        const updatedScore = isCorrect ? (userScore || 0) + 1 : userScore || 0; // Increment score if correct

        setQuestionsAttempted(updatedQuestions);
        setUserScore(updatedScore);

        const updatedAccuracy = Number(((updatedScore / updatedQuestions) * 100).toFixed(2));
        setAccuracy(updatedAccuracy);

        // Store updated values in localStorage
        localStorage.setItem("questionsAttempted", updatedQuestions);
        localStorage.setItem("userScore", updatedScore);
        localStorage.setItem("accuracy", updatedAccuracy);
    };




    return (
        <div className="App">
            <div className="container" style={{ display: "flex", flexDirection: "column" }}>
                {!isLoggedIn ? (
                    <UserNameForm onSubmit={handleUsernameSubmit} />
                ) : (<>
                    <UserProfile username={username} score={userScore} attemptedQuestions={questionsAttempted}
                                 accuracy={accuracy} onLogout={handleLogout}/>
                    <div className="container" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        {finalScore !== null ? (
                            <div>
                                <h2>Quiz Completed!</h2>
                                <p>Your final quiz score: {finalScore}</p>
                                <button onClick={() => setFinalScore(null)}>Back to Menu</button>
                            </div>
                        ) : selectedQuiz ? (
                            <Quiz
                                questions={shuffledQuestions}
                                onComplete={handleQuizCompletion}
                                onScoreUpdate={(isCorrect) => {
                                    handleQuestionCompleted(isCorrect); // Pass true or false
                                }}
                            />

                        ) : (<>
                            <header>
                                <h1>Theory Quest</h1>
                            </header>
                            <QuizSelector onSelectQuiz={handleQuizSelection}/>
                    </>)}
                    </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
