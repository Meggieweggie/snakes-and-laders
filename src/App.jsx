import { useState } from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import WinCheck from './WinCheck.jsx';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerPosition, setPlayerPosition] = useState({ 1: 0, 2: 0 });

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setPlayerPosition(prev => ({
      ...prev,
      [currentPlayer]: prev[currentPlayer] + dice
    }));
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

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