import React from "react";

const QuizSelector = ({ onSelectQuiz }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
            <h2>Select a Quiz</h2>
            <button onClick={() => onSelectQuiz("Keys")}>Key Signatures</button>
            <button onClick={() => onSelectQuiz("Intervals")}>Intervals</button>
            <button onClick={() => onSelectQuiz("Rhythm")}>Rhythm</button>
            <button onClick={() => onSelectQuiz("Terms")}>Terms</button>
            <button onClick={() => onSelectQuiz("Mixed")}>All</button>
        </div>
    );
};

export default QuizSelector;
