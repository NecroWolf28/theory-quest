import React from "react";

const QuizSelector = ({ onSelectQuiz }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
            <h2>Select a Quiz</h2>
            <button onClick={() => onSelectQuiz("keys")}>Key Signatures</button>
            <button onClick={() => onSelectQuiz("intervals")}>Intervals</button>
            <button onClick={() => onSelectQuiz("rhythm")}>Rhythm</button>
            <button onClick={() => onSelectQuiz("all")}>All</button>
        </div>
    );
};

export default QuizSelector;
