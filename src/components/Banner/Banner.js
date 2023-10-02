import React from 'react';

function Banner({ gameStatus, restartGame, children }) {
  return (
    <div className={`${gameStatus} banner`}>
      {children}
      {
        <div className="banner-button">
          <button className="restart-button" onClick={() => restartGame()}>
            <strong>↻ Restart Game</strong>
          </button>
        </div>
      }
    </div>
  );
}

export default Banner;
