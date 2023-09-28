import React from 'react';

function Banner({ guessNumber, gameOver, answer }) {
  return (
    <div className={`${gameOver} banner`}>
      {gameOver === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessNumber} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
