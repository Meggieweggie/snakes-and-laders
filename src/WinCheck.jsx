function WinCheck({ currentPlayer, playerPosition }) {
  const hasWon = playerPosition[currentPlayer] >= 100;

  return (
    <div>
      {hasWon && <h2>Player {currentPlayer} wins!</h2>}
    </div>
  );
}

export default WinCheck;