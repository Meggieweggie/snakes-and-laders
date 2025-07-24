
import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerInfo from './components/PlayerInfo';
import DiceRoller from './components/DiceRoller';
import GameStatus from './components/GameStatus';
import { snakes, ladders } from "./data/boardData";

// Game constants (provided by khalid.mohamed1)
import { SNAKES, LADDERS } from './utils/boardConfig';
// Game logic (provided by christian.michael)
import { initializePlayers, movePlayer, switchTurn, checkWin } from './utils/gameLogic';
// UI components (provided by eugene.muruga)
import { checkSpecialSquare } from './utils/boardConfig';

function App() {
  // Game state management (provided by christian.michael)
  const [players, setPlayers] = useState(initializePlayers());
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [message, setMessage] = useState("Player 1's turn. Roll the dice!");

  const currentPlayer = players[currentPlayerIndex];

  // Handle dice roll and game logic (integration by megan.mumbi)
  const handleDiceRoll = (value) => {
    if (gameOver) return;

    setDiceValue(value);

    // Game logic implementation (provided by christian.michael)
    const newPosition = movePlayer(currentPlayer.position, value);

    // Check if player can move
    if (newPosition > 100) {
      setMessage(${currentPlayer.name} needs exact roll to win. Try again!);
      switchPlayerTurn();
      return;
    }

    // Update position
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].position = newPosition;
    setPlayers(updatedPlayers);

    // Check for snake or ladder (provided by khalid.mohamed1)
    const specialMove = checkSpecialSquare(newPosition);
    if (specialMove) {
      setTimeout(() => {
        const finalPosition = specialMove.newPosition;
        const updatedPlayersAfterSpecial = [...players];
        updatedPlayersAfterSpecial[currentPlayerIndex].position = finalPosition;
        setPlayers(updatedPlayersAfterSpecial);

        if (specialMove.type === 'snake') {
          setMessage(${currentPlayer.name} got bitten by a snake! Slid to ${finalPosition});
        } else {
          setMessage(${currentPlayer.name} climbed a ladder! Moved to ${finalPosition});
        }

        switchPlayerTurn();
      }, 1000);
      return;
    } else {
      setMessage(${currentPlayer.name} moved to ${newPosition});
    }

    // Check for win (provided by khalid.mohamed1)
    if (checkWin(newPosition)) {
      setGameOver(true);
      setWinner(currentPlayer);
      setMessage(🎉 ${currentPlayer.name} wins the game! 🎉);
      return;
    }

    switchPlayerTurn();
  };

  // Turn management (provided by christian.michael)
  const switchPlayerTurn = () => {
    setTimeout(() => {
      const nextPlayerIndex = switchTurn(currentPlayerIndex, players.length);
      setCurrentPlayerIndex(nextPlayerIndex);
      if (!gameOver) {
        setMessage(${players[nextPlayerIndex].name}'s turn);
      }
    }, 1500);
  };

  // Reset game functionality (implemented by megan.mumbi)
  const resetGame = () => {
    setPlayers(initializePlayers());
    setCurrentPlayerIndex(0);
    setDiceValue(1);
    setGameOver(false);
    setWinner(null);
    setMessage("Player 1's turn. Roll the dice!");
  };

  return (
    <div className="app">
      <header>
        <h1>:snake: Snake and Ladder Game :ladder:</h1>
      </header>
      
      <div className="game-container">
        <div className="game-sidebar">
          <div className="players-section">
            <h2>Players</h2>
            {players.map((player, index) => (
              <PlayerInfo
                key={player.id}
                player={player}
                isActive={index === currentPlayerIndex && !gameOver}
              />
            ))}
          </div>
          
          <div className="dice-section">
            <DiceRoller 
              onRoll={handleDiceRoll}
              disabled={gameOver}
            />
            <div className="dice-display">Dice: {diceValue}</div>
          </div>
          
          <GameStatus message={message} />
          
          <button onClick={resetGame} className="reset-button">
            Reset Game
          </button>
        </div>
        
        <div className="board-section">
          <GameBoard 
            players={players}
            snakes={SNAKES}
            ladders={LADDERS}
          />
        </div>
      </div>
      
      {gameOver && winner && (
        <div className="game-over-modal">
          <div className="winner-card">
            <h2>Game Over!</h2>
            <div className="winner-info">
              <div 
                className="winner-token" 
                style={{ backgroundColor: winner.color }}

          ></div>
          <h3>{winner.name} Wins!</h3>
        </div>
        <button onClick={resetGame} className="play-again-button">
          Play Again
        </button>
      </div>
    </div>
  )}
</div>
  );
}

export default App;






