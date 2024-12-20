import React, { useState } from "react";

const Question = ({ question, options, correctAnswer, onAnswer, image }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState("");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === correctAnswer) {
            setFeedback("Correct!");
            onAnswer(true); // Notify parent that the answer is correct
        } else {
            setFeedback("Incorrect.");
            onAnswer(false); // Notify parent that the answer is incorrect
        }
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            {/* Render the image if it exists */}
            {image && <img src={image} alt="Question related" className="question-image" />}
            <div className="options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`option ${selectedOption === option ? "selected" : ""}`}
                        onClick={() => handleOptionClick(option)}
                        disabled={!!selectedOption}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
        </div>
    );
};

export default Question;
