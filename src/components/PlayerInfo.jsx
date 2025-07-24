import React from 'react';

function PlayerInfo({ player, isActive }) {
  return (
    <div className={`player-card ${isActive ? 'active' : ''}`}>
      <div
        className="player-token"
        style={{ backgroundColor: player.color }}
      ></div>
      <div className="player-details">
        <h3>{player.name}</h3>
        <p>Position: {player.position}</p>
      </div>
    </div>
  );
}

export default PlayerInfo;