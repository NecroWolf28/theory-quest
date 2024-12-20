import React, { useState } from "react";

const Quiz = ({ selection, questions, onComplete, onScoreUpdate }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        onScoreUpdate(isCorrect); // Pass correctness to parent

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const finalScore = score + (isCorrect ? 1 : 0); // Include last question's score
            onComplete(finalScore);
        }
    };



    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
            <p>Current Score: {score}</p>
        </div>
    );
};

export default Quiz;
