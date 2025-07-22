import React, { useState } from "react";
import "./App.css";

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
      <h1> Snakes and Ladders</h1>
      <div className="board">{generateBoard()}</div>
      <button onClick={rollDice}>Roll Dice</button>
      <p>{diceRoll ? `You rolled: ${diceRoll}` : "Click to roll the dice"}</p>
    </div>
  );
}

export default App;





