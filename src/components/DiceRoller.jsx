import React from 'react';

function DiceRoller({ onRoll, disabled }) {
  const handleRoll = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    onRoll(value);
  };

  return (
    <div className="dice-roller">
      <button onClick={handleRoll} disabled={disabled} className="roll-button">
        Roll Dice 🎲
      </button>
    </div>
  );
}

export default DiceRoller;