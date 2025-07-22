import { useState } from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import WinCheck from './WinCheck.jsx';

function App() {
  const [playerPos, setPlayerPos] = useState(1);
  const [diceRoll, setDiceRoll] = useState(null);

  function generateBoard() {
    const boardCells = [];
    let rowIsEven = false;

    for (let row = 9; row >= 0; row--) {
      const rowCells = [];
      for (let col = 0; col < 10; col++) {
        let cellNum = row * 10 + col + 1;
        if (rowIsEven) {
          cellNum = row * 10 + (9 - col) + 1;
        }

        rowCells.push(
          <div key={cellNum} className="cell" id={`cell-${cellNum}`}>
            {cellNum}
            {cellNum === playerPos && <div className="token"></div>}
          </div>
        );
      }
      rowIsEven = !rowIsEven;
      boardCells.push(...rowCells);
    }

    return boardCells;
  }

  function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);

    let nextPos = playerPos + roll;
    if (nextPos > 100) nextPos = 100;
    setPlayerPos(nextPos);
  }

  return (
    <div>
      <PlayerTurn currentPlayer={currentPlayer} />
      <button onClick={rollDice}>Roll Dice</button>
      <WinCheck currentPlayer={currentPlayer === 1 ? 2 : 1} playerPosition={playerPosition} />
      <h1> Snakes and Ladders</h1>
    </div>
   
  );
}

export default App;