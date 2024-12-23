import React, { useState, useEffect } from "react";
import Quiz from "./quizzes/Quiz";
import QuizSelector from "./components/QuizSelector";
import quizData from "./quizzes/questions/quizData";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserNameForm from "./components/UserNameForm";

const shuffleArray = (array) => {
    return array
        .map((item) => ({
            ...item,
            options: item.options
                .map((option) => ({ option, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ option }) => option),
        }))
        .sort(() => Math.random() - 0.5);
};

const App = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [finalScore, setFinalScore] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [questionsAttempted, setQuestionsAttempted] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [grade, setGrade] = useState(""); // Add difficulty state

    useEffect(() => {
        const storedUsername = localStorage.getItem("userName");
        const storedScore = localStorage.getItem("userScore");
        const storedQuestionsAttempted = localStorage.getItem("questionsAttempted");
        const storedAccuracy = localStorage.getItem("accuracy");
        if (storedScore) setUserScore(parseInt(storedScore, 10));
        if (storedUsername) {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }
        if (storedQuestionsAttempted) setQuestionsAttempted(storedQuestionsAttempted);
        if (storedAccuracy) setAccuracy(parseInt(storedAccuracy, 10));
    }, []);

    const handleUsernameSubmit = (name) => {
        setUsername(name);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername("");
        setIsLoggedIn(false);
        setUserScore(0);
        setQuestionsAttempted(0);
        setAccuracy(0);
        setSelectedQuiz(null);
        localStorage.removeItem("userName");
        localStorage.removeItem("userScore");
        localStorage.removeItem("questionsAttempted");
        localStorage.removeItem("accuracy");
    };

    const handleQuizSelection = (quizKey) => {
        if (!grade) {
            alert("Please select a Grade!");
            return;
        }
        const allQuestions = quizData[quizKey];
        const filteredQuestions = allQuestions.filter(
            (question) => question.grade === parseInt(grade, 10)
        ); // Filter questions by difficulty
        setFinalScore(null);
        setShuffledQuestions(shuffleArray(filteredQuestions).splice(0, 10));
        setSelectedQuiz(quizKey);
    };

    const handleQuizCompletion = (score) => {
        setFinalScore(score);
        setSelectedQuiz(null);
    };

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
                ) : (
                    <>
                        <UserProfile
                            username={username}
                            score={userScore}
                            attemptedQuestions={questionsAttempted}
                            accuracy={accuracy}
                            onLogout={handleLogout}
                        />
                        <div
                            className="container"
                            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                        >
                            {finalScore !== null ? (
                                <div>
                                    <h1>Quiz Completed!</h1>
                                    <h2>Your final quiz score: {finalScore}</h2>
                                    <button onClick={() => setFinalScore(null)}>Back to Menu</button>
                                </div>
                            ) : selectedQuiz ? (
                                <Quiz
                                    selection={selectedQuiz}
                                    questions={shuffledQuestions}
                                    onComplete={handleQuizCompletion}
                                    onScoreUpdate={handleQuestionCompleted}
                                />
                            ) : (
                                <>
                                    <header>
                                        <h1>Welcome to Theory Quest</h1>
                                    </header>
                                    <div style={{margin: "20px 0", textAlign: "center"}}>
                                        <label
                                            htmlFor="grade"
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: "bold",
                                                marginRight: "10px",
                                                color: "#4f8c8f",
                                            }}
                                        >
                                            Select Grade:
                                        </label>
                                        <select
                                            id="grade"
                                            value={grade}
                                            onChange={(e) => setGrade(e.target.value)}
                                            style={{
                                                fontSize: "1rem",
                                                padding: "8px 12px",
                                                borderRadius: "5px",
                                                border: "2px solid #4f8c8f",
                                                outline: "none",
                                                backgroundColor: "#F9F9F9",
                                                color: "#333",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <option value="">--Select--</option>
                                            <option value="1">Grade 1</option>
                                            <option value="2">Grade 2</option>
                                            <option value="3">Grade 3</option>
                                            <option value="4">Grade 4</option>
                                            <option value="5">Grade 5</option>
                                            <option value="6">Grade 6</option>
                                            <option value="7">Grade 7</option>
                                            <option value="8">Grade 8</option>
                                        </select>
                                    </div>
                                    <QuizSelector onSelectQuiz={handleQuizSelection}/>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
