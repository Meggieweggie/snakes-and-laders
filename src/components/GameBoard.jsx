import React from 'react';
import { SNAKES, LADDERS } from '../data/boardData';
import '../styles/Game.css'; 

const GameBoard = ({ players }) => {
  const renderBoard = () => {
    const rows = [];

    for (let row = 9; row >= 0; row--) {
      const cells = [];
      const isEvenRow = (9 - row) % 2 === 0;

      for (let col = 0; col < 10; col++) {
        const cellNumber = row * 10 + (isEvenRow ? col + 1 : 10 - col);

        const playerTokens = players
          .filter(player => player.position === cellNumber)
          .map(player => (
            <div
              key={player.id}
              className="player-token"
              style={{ backgroundColor: player.color }}
            />
          ));

        let cellClass = 'cell';
        if (SNAKES[cellNumber]) cellClass += ' snake';
        else if (LADDERS[cellNumber]) cellClass += ' ladder';

        cells.push(
          <div key={cellNumber} className={cellClass}>
            <span className="number">{cellNumber}</span>

            {/* Show 🐍 if snake head */}
            {SNAKES[cellNumber] && <span className="symbol">🐍</span>}

            {/* Show 🪜 if ladder base */}
            {LADDERS[cellNumber] && <span className="symbol">🪜</span>}

            {playerTokens.length > 0 && (
              <div className="token-container">{playerTokens}</div>
            )}
          </div>
        );
      }

      rows.push(
        <div key={row} className="board-row">
          {cells}
        </div>
      );
    }

    return rows;
  };

  return <div className="board-container">{renderBoard()}</div>;
};

export default GameBoard;