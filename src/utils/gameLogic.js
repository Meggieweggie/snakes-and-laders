// Player data structure
export const PLAYER_DATA = [
  { id: 1, name: 'Player 1', position: 0, color: '#FF6B6B' },
  { id: 2, name: 'Player 2', position: 0, color: '#4ECDC4' }
];

// Initialize players
export const initializePlayers = () => {
  return PLAYER_DATA.map(player => ({ ...player }));
};

// Move player by dice value
export const movePlayer = (currentPosition, diceValue) => {
  const newPosition = currentPosition + diceValue;
  return newPosition <= 100 ? newPosition : currentPosition;
};

// Switch to next player
export const switchTurn = (currentIndex, totalPlayers) => {
  return (currentIndex + 1) % totalPlayers;
};

// Check win condition
export const checkWin = (position) => {
  return position === 100;
};

// Get game state message
export const getGameStateMessage = (player, action, newPosition) => {
  switch (action) {
    case 'move':
      return ${player.name} moved to ${newPosition};
    case 'snake':
      return ${player.name} got bitten by a snake! Slid to ${newPosition};
    case 'ladder':
      return ${player.name} climbed a ladder! Moved to ${newPosition};
    case 'win':
      return 🎉 ${player.name} wins the game! 🎉;
    case 'invalid':
      return ${player.name} needs exact roll to win. Try again!;
    default:
      return ${player.name}'s turn;
  }
};

Show les