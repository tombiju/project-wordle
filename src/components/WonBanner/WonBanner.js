import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ guessNumber, restartGame }) {
  return (
    <Banner gameStatus="happy" restartGame={restartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {`${guessNumber} ${guessNumber > 1 ? 'guesses' : 'guess'}`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
