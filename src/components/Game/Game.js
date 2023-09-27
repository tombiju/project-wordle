import React from 'react';

import UserInput from '../GuessInput';
import Guess from '../Guess/Guess';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill('')
  );
  const [guessNumber, setGuessNumber] = React.useState(0);
  function updateGuess(newGuess) {
    const updatedGuesses = [...guesses];
    updatedGuesses[guessNumber] = newGuess;
    setGuesses(updatedGuesses);
    setGuessNumber(guessNumber + 1);
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => (
          <Guess key={crypto.randomUUID()} guess={guess}></Guess>
        ))}
      </div>
      <UserInput
        guessNumber={guessNumber}
        updateGuess={updateGuess}
      ></UserInput>
    </>
  );
}

export default Game;
