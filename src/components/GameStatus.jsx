import React from 'react';

function GameStatus({ message }) {
  return (
    <div className="game-status">
      <p>{message}</p>
    </div>
  );
}

export default GameStatus;