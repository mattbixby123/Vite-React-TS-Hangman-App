// src/App.tsx

import React, { useState, useEffect } from 'react';
import './App.css';
import useHangman from './hooks/useHangman';
import useRobot from './hooks/useRobot';
import GameDisplay from './components/GameDisplay';
import GuessInput from './components/GuessInput';

const dictionary = ['typescript', 'programming', 'robot', 'developer'];

const App: React.FC = () => {
    const { selectWord } = useRobot(dictionary);
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        setWord(selectWord());
    }, []);

    const {
        guess,
        attemptsLeft,
        isGameOver,
        isWordGuessed,
        getDisplayWord,
    } = useHangman(word);

    const [message, setMessage] = useState<string>('');

    const handleGuess = (letter: string) => {
        guess(letter);

        if (isWordGuessed()) {
            setMessage('Congratulations! You won!');
        } else if (isGameOver()) {
            setMessage(`Game over! The word was: ${word}`);
        }
    };

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            <GameDisplay displayWord={getDisplayWord()} attemptsLeft={attemptsLeft} />
            {isGameOver() ? (
                <p>{message}</p>
            ) : (
                <GuessInput onGuess={handleGuess} />
            )}
        </div>
    );
};

export default App;
