import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ answer, restartGame }) {
  return (
    <Banner gameStatus="sad" restartGame={restartGame}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
