let board = document.getElementById("board");
let diceOutput = document.getElementById("dice-output");
let rollButton = document.getElementById("roll-button");
let currentPlayerDisplay = document.getElementById("current-player");

let playerPositions = {
  player1: 1,
  player2: 1,
};

let currentPlayer = "player1";

// create the board
function setupBoard() {
  board.innerHTML = "";
  for (let i = 100; i >= 1; i--) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = "cell-" + i;
    cell.textContent = i;
    board.appendChild(cell);
  }
  updateTokens();
}

// roll the dice
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  diceOutput.textContent = currentPlayer + " rolled: " + roll;

  playerPositions[currentPlayer] += roll;
  if (playerPositions[currentPlayer] > 100) {
    playerPositions[currentPlayer] = 100;
  }

  updateTokens();

  // check win
  if (playerPositions[currentPlayer] === 100) {
    alert(currentPlayer + " wins the game!");
    rollButton.disabled = true;
    return;
  }

  // switch player
  currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
  currentPlayerDisplay.textContent = "Current Turn: " + currentPlayer;
}

// show player tokens on the board
function updateTokens() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.innerHTML = cell.textContent;
  });

  let pos1 = document.getElementById("cell-" + playerPositions.player1);
  let pos2 = document.getElementById("cell-" + playerPositions.player2);

  if (pos1) {
    let token1 = document.createElement("div");
    token1.className = "token";
    token1.style.backgroundColor = "gold";
    token1.title = "Player 1";
    pos1.appendChild(token1);
  }

  if (pos2) {
    let token2 = document.createElement("div");
    token2.className = "token";
    token2.style.backgroundColor = "blue";
    token2.title = "Player 2";
    token2.style.left = "5px"; // offset so both tokens don't overlap
    token2.style.bottom = "5px";
    pos2.appendChild(token2);
  }
}

rollButton.addEventListener("click", rollDice);

setupBoard();
currentPlayerDisplay.textContent = "Current Turn: " + currentPlayer;

