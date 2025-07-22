import React, { useState } from "react";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState(1);

  const cells = Array.from({ length: 100 }, (_, i) => 100 - i);

  return (
    <div className="container">
      <h1>Snakes and Ladders</h1>
      <div className="board">
        {cells.map((num) => {
          let className = "cell";
          if (num === player1) className += " p1";
          return (
            <div key={num} className={className}>
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;



