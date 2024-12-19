import React, { useState } from 'react';

const UserNameForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            // Save name to localStorage
            localStorage.setItem('userName', name);
            localStorage.setItem('score', 0); // Initialize score
            onSubmit(name); // Call parent callback to update the app state
        } else {
            alert('Please enter a name');
        }
    };

    return (
        <div>
            <h2>Enter your name to start playing</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Start Game</button>
            </form>
        </div>
    );
};

export default UserNameForm;
