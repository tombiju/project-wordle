import React from 'react';

import GuessInput from '../GuessInput';
import Guess from '../Guess/Guess';
import Keyboard from '../Keyboard/Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

const hierarchy = { correct: 2, misplaced: 1, incorrect: 0 };

function updateColorMap(validatedGuess, colorMap) {
  const newColorMap = { ...colorMap };
  validatedGuess.forEach((validation) => {
    if (
      validation.letter in colorMap &&
      hierarchy[colorMap[validation.letter]] < hierarchy[validation.status]
    ) {
      newColorMap[validation.letter] = validation.status;
    } else if (!(validation.letter in colorMap)) {
      newColorMap[validation.letter] = validation.status;
    }
  });
  return newColorMap;
}

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS)));
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill([])
  );
  const [colorMap, setColorMap] = React.useState({});
  const [guessNumber, setGuessNumber] = React.useState(0);
  const [gameOver, setGameOver] = React.useState('');

  function updateGuess(newGuess) {
    const updatedGuesses = [...guesses];
    const validatedGuess = checkGuess(newGuess, answer);
    setColorMap(updateColorMap(validatedGuess, colorMap));
    updatedGuesses[guessNumber] = validatedGuess;
    setGuesses(updatedGuesses);
    setGuessNumber(guessNumber + 1);
    if (validatedGuess.every((guess) => guess.status === 'correct')) {
      setGameOver('happy');
    } else if (guessNumber + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver('sad');
    }
  }

  function restartGame() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses(Array(NUM_OF_GUESSES_ALLOWED).fill([]));
    setColorMap({});
    setGuessNumber(0);
    setGameOver('');
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => (
          <Guess key={crypto.randomUUID()} guess={guess}></Guess>
        ))}
      </div>
      <GuessInput
        guessNumber={guessNumber}
        updateGuess={updateGuess}
        disabled={gameOver.length !== 0}
      ></GuessInput>
      {gameOver.length !== 0 && (
        <Banner
          guessNumber={guessNumber}
          gameOver={gameOver}
          answer={answer}
          restartGame={restartGame}
        ></Banner>
      )}
      <Keyboard colorMap={colorMap}></Keyboard>
    </>
  );
}

export default Game;
