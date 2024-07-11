// src/components/GameDisplay.tsx

import React from 'react';

interface GameDisplayProps {
    displayWord: string;
    attemptsLeft: number;
}

const GameDisplay: React.FC<GameDisplayProps> = ({ displayWord, attemptsLeft }) => {
    return (
        <div>
            <p>Word: {displayWord}</p>
            <p>Attempts left: {attemptsLeft}</p>
        </div>
    );
};

export default GameDisplay;
