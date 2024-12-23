import React, { useState } from "react";

const Quiz = ({ selection, questions, onComplete, onScoreUpdate }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null); // Track selected option
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // Show correct answer state

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        onScoreUpdate(isCorrect); // Pass correctness to parent
        if (isCorrect) {
            setScore(score + 1);
        }

        setShowCorrectAnswer(true); // Show correct and incorrect answers
        setTimeout(() => {
            setShowCorrectAnswer(false); // Hide after 1 second
            setSelectedOption(null); // Reset selected option
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                const finalScore = score + (isCorrect ? 1 : 0); // Include last question's score
                onComplete(finalScore);
            }
        }, 1500); // Delay for 1.5 seconds
    };

    const currentQuestion = questions[currentQuestionIndex];

    // Dynamic styling for answer options
    const getButtonStyle = (option) => {
        if (!showCorrectAnswer) return {}; // No styling before answer is shown

        if (option === currentQuestion.answer) {
            return { backgroundColor: "green", color: "white" }; // Correct answer is green
        }

        if (option === selectedOption && selectedOption !== currentQuestion.answer) {
            return { backgroundColor: "darkred", color: "white" }; // Incorrect selected answer is red
        }

        return {}; // Default styling for other options
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>{selection} Quiz</h1>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.image && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                    <img
                        src={require(`./questions/images/${currentQuestion.image}`)}
                        alt="Question related"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </div>
            )}
            {currentQuestion.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => !showCorrectAnswer && handleAnswer(option)} // Prevent clicks during delay
                    style={{
                        padding: "10px 20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: showCorrectAnswer ? "not-allowed" : "pointer",
                        ...getButtonStyle(option), // Apply dynamic styling
                    }}
                    disabled={showCorrectAnswer} // Disable buttons during delay
                >
                    {option}
                </button>
            ))}
            <p>Current Score: {score}</p>
        </div>
    );
};

export default Quiz;
