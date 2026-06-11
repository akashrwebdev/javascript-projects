// ==========================
// VARIABLES
// ==========================

const board = document.getElementById("board");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// ==========================
// CREATE BOARD
// ==========================

function createBoard() {
  board.innerHTML = "";

  gameState.forEach((cell, index) => {
    const cellElement = document.createElement("div");

    cellElement.classList.add("cell");
    cellElement.dataset.index = index;

    cellElement.addEventListener("click", handleCellClick);

    board.appendChild(cellElement);
  });
}

// ==========================
// CELL CLICK
// ==========================

function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (gameState[index] !== "" || !gameActive) {
    return;
  }

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  checkWinner();

  if (gameActive) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

// ==========================
// CHECK WINNER
// ==========================

function checkWinner() {
  let won = false;

  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;

    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    ) {
      won = true;

      const cells = document.querySelectorAll(".cell");

      cells[a].classList.add("winner");
      cells[b].classList.add("winner");
      cells[c].classList.add("winner");
    }
  });

  if (won) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    statusText.textContent = "🤝 Match Draw!";
    gameActive = false;
  }
}

// ==========================
// RESTART GAME
// ==========================

function restartGame() {
  currentPlayer = "X";
  gameActive = true;

  gameState = ["", "", "", "", "", "", "", "", ""];

  statusText.textContent = "Player X's Turn";

  createBoard();
}

// ==========================
// EVENTS
// ==========================

restartBtn.addEventListener("click", restartGame);

// Initial Load
createBoard();
