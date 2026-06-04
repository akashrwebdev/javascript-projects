let guessBtn = document.querySelector(".guess");
let input = document.querySelector("#input");
let highlight = document.querySelector(".highlight");
let message = document.querySelector(".message");
let attemptsDisplay = document.querySelector(".attempts");
let gameOverDiv = document.querySelector(".gameOver");
let restartBtn = document.querySelector(".restart");

let maxGuesses = 4;
let guessCount = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);

// Function to reset the game
function resetGame() {
  guessCount = 0;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  input.value = "";
  highlight.textContent = "";
  message.textContent = "";
  attemptsDisplay.textContent = `Attempts: ${maxGuesses}`;
  gameOverDiv.classList.add("hidden");
  input.disabled = false;
  guessBtn.disabled = false;
}

// Update attempts display
attemptsDisplay.textContent = `Attempts: ${maxGuesses}`;

// Guess button click
guessBtn.addEventListener("click", () => {
  let inputValue = Number(input.value);

  if (!inputValue || inputValue < 1 || inputValue > 100) {
    alert("Enter a number between 1 and 100!");
    return;
  }

  if (inputValue === randomNumber) {
    highlight.textContent = "Correct!";
    message.textContent = "You guessed the number 🎉";
    input.disabled = true;
    guessBtn.disabled = true;
    return;
  } else if (inputValue < randomNumber) {
    highlight.textContent = "Too low!";
    message.textContent = "Try a higher number.";
  } else if (inputValue > randomNumber) {
    highlight.textContent = "Too high!";
    message.textContent = "Try a smaller number.";
  }

  guessCount++;
  attemptsDisplay.textContent = `Attempts: ${maxGuesses - guessCount}`;

  // Check if game over
  if (guessCount >= maxGuesses) {
    gameOverDiv.classList.remove("hidden");
    input.disabled = true;
    guessBtn.disabled = true;
  }
});

// Restart button click
restartBtn.addEventListener("click", resetGame);
