// src/hooks/useRobot.ts

const useRobot = (dictionary: string[]) => {
    const selectWord = () => {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        return dictionary[randomIndex];
    };

    const makeGuess = (guessedLetters: Set<string>): string => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let guess: string;
        do {
            guess = alphabet[Math.floor(Math.random() * alphabet.length)];
        } while (guessedLetters.has(guess));
        return guess;
    };

    return { selectWord, makeGuess };
};

export default useRobot;
