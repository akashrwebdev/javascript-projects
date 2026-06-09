const emojis = ["🍎", "🍌", "🍇", "🍒", "🍉", "🥝", "🍍", "🥭"];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

const gameBoard = document.getElementById("gameBoard");
const movesDisplay = document.getElementById("moves");

function startGame() {
  cards = [...emojis, ...emojis];
  cards.sort(() => Math.random() - 0.5);

  gameBoard.innerHTML = "";
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;

  movesDisplay.textContent = moves;

  cards.forEach((emoji, index) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.dataset.emoji = emoji;
    card.dataset.index = index;

    card.addEventListener("click", flipCard);

    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length === 2 || this.classList.contains("flipped")) {
    return;
  }

  this.textContent = this.dataset.emoji;
  this.classList.add("flipped");

  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    movesDisplay.textContent = moves;

    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add("matched");
    card2.classList.add("matched");

    matchedPairs++;

    flippedCards = [];

    if (matchedPairs === emojis.length) {
      setTimeout(() => {
        alert(`🎉 You won in ${moves} moves!`);
      }, 300);
    }
  } else {
    setTimeout(() => {
      card1.textContent = "";
      card2.textContent = "";

      card1.classList.remove("flipped");
      card2.classList.remove("flipped");

      flippedCards = [];
    }, 800);
  }
}

startGame();
