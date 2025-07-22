<<<<<<< HEAD
import React { useState } from "react";

import "./App.css";
=======
import { useState } from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import WinCheck from './WinCheck.jsx';
>>>>>>> master

// Snakes and ladders board setup
const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};
const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

function App() {
  const [count, setCount] = useState(0)
  const numPlayers = 2;
  const [playerPositions, setPlayerPositions] = useState(Array(numPlayers).fill(1));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [message, setMessage] = useState('');

  function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    let nextPos = playerPositions[currentPlayer] + roll;
    let eventMsg = `Player ${currentPlayer + 1} rolled a ${roll}.`;
    if (nextPos > 100) {
      eventMsg += " Can't move, need exact roll to finish.";
      setMessage(eventMsg);
      return;
    }
    // Check for ladders
    if (ladders[nextPos]) {
      eventMsg += ` Landed on a ladder! Climb up to ${ladders[nextPos]}.`;
      nextPos = ladders[nextPos];
    }
    // Check for snakes
    else if (snakes[nextPos]) {
      eventMsg += ` Oh no, a snake! Slide down to ${snakes[nextPos]}.`;
      nextPos = snakes[nextPos];
    }
    const newPositions = [...playerPositions];
    newPositions[currentPlayer] = nextPos;
    setPlayerPositions(newPositions);
    if (nextPos === 100) {
      eventMsg += ` Player ${currentPlayer + 1} wins!`;
      setMessage(eventMsg);
      return;
    }
    setMessage(eventMsg);
    setCurrentPlayer((currentPlayer + 1) % numPlayers);
  }

  return (
<<<<<<< HEAD
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Snakes and Ladders (Multiplayer)</h2>
      <div className="card">
        <p>Current turn: Player {currentPlayer + 1}</p>
        {playerPositions.map((pos, idx) => (
          <p key={idx}>Player {idx + 1} position: {pos}</p>
        ))}
        <button onClick={rollDice} disabled={playerPositions[currentPlayer] === 100}>
          Roll Dice
        </button>
        <p>{message}</p>
      </div>
    </>
  )
=======
    <div>
      <PlayerTurn currentPlayer={currentPlayer} />
      <button onClick={rollDice}>Roll Dice</button>
      <WinCheck currentPlayer={currentPlayer === 1 ? 2 : 1} playerPosition={playerPosition} />
      <h1> Snakes and Ladders</h1>
    </div>
   
  );
>>>>>>> master
}

export default App;