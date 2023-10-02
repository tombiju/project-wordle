import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARACTERS_ALLOWED } from '../../constants';

function Cell({ index, guess }) {
  return (
    <span
      className={`cell${
        Object.keys(guess).length ? ' ' + guess[index]['status'] : ''
      }`}
    >
      {Object.keys(guess).length ? (
        <strong>{guess[index]['letter']}</strong>
      ) : (
        ''
      )}
    </span>
  );
}

function Guess({ guess = '' }) {
  return (
    <p className="guess">
      {range(0, NUM_OF_CHARACTERS_ALLOWED).map((index) => {
        return <Cell key={index} index={index} guess={guess}></Cell>;
      })}
    </p>
  );
}

export default Guess;
