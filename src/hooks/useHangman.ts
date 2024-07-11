// src/hooks/useHangman.ts

import { useState, useEffect } from 'react';

const useHangman = (word: string, maxAttempts: number = 6) => {
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [attemptsLeft, setAttemptsLeft] = useState<number>(maxAttempts);

    useEffect(() => {
        setGuessedLetters(new Set());
        setAttemptsLeft(maxAttempts);
    }, [word]);

    const guess = (letter: string) => {
        if (guessedLetters.has(letter)) {
            return false; // Letter already guessed
        }

        setGuessedLetters(new Set(guessedLetters).add(letter));

        if (!word.includes(letter)) {
            setAttemptsLeft(attemptsLeft - 1);
        }

        return true;
    };

    const isGameOver = (): boolean => {
        return attemptsLeft <= 0 || isWordGuessed();
    };

    const isWordGuessed = (): boolean => {
        for (let char of word) {
            if (!guessedLetters.has(char)) {
                return false;
            }
        }
        return true;
    };

    const getDisplayWord = (): string => {
        let display = '';
        for (let char of word) {
            display += guessedLetters.has(char) ? `${char} ` : '_ ';
        }
        return display.trim();
    };

    return {
        guess,
        attemptsLeft,
        isGameOver,
        isWordGuessed,
        getDisplayWord,
    };
};

export default useHangman;
