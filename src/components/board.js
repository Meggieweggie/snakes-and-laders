import React from 'react';
import { SNAKES, LADDERS } from '../utils/gameLogic';

const Board = ({ players }) => {
  const renderBoard = () => {
    const rows = [];
    for (let row = 9; row >= 0; row--) {
      const cells = [];
      const isEvenRow = (9 - row) % 2 === 0;

      for (let col = 0; col < 10; col++) {
        const cellNumber = row * 10 + (isEvenRow ? col + 1 : 10 - col);
        const playerTokens = players
          .map((pos, idx) => pos === cellNumber ? `P${idx + 1}` : null)
          .filter(Boolean)
          .join(', ');

        let cellClass = 'cell';
        if (SNAKES[cellNumber]) cellClass += ' snake';
        else if (LADDERS[cellNumber]) cellClass += ' ladder';

        cells.push(
          <div key={cellNumber} className={cellClass}>
            <span className="number">{cellNumber}</span>
            {playerTokens && <div className="token">{playerTokens}</div>}
          </div>
        );
      }
      rows.push(<div key={row} className="board-row">{cells}</div>);
    }
    return rows;
  };

  return <div className="board-container">{renderBoard()}</div>;
};

export default Board;