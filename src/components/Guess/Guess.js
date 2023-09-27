import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARACTERS_ALLOWED } from '../../constants';

function Guess({ guess = '' }) {
  return (
    <p className="guess">
      {range(0, NUM_OF_CHARACTERS_ALLOWED).map((index) => {
        return (
          <span key={crypto.randomUUID()} className="cell">
            {guess[index] || ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
