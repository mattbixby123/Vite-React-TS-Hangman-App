// src/components/GuessInput.tsx

import React, { useState } from 'react';

interface GuessInputProps {
    onGuess: (letter: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess }) => {
    const [guess, setGuess] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (guess) {
            onGuess(guess.toLowerCase());
            setGuess('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={guess}
                onChange={handleChange}
                maxLength={1}
                required
            />
            <button type="submit">Guess</button>
        </form>
    );
};

export default GuessInput;
