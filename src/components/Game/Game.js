import React from 'react';

import UserInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  function updateGuess(newGuess) {
    return setGuess(newGuess);
  }

  return (
    <>
      {guess}
      <UserInput updateGuess={updateGuess}></UserInput>
    </>
  );
}

export default Game;
