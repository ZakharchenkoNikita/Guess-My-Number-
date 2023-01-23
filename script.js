"user strict";

// Secret number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; // "+1" cut decimal part (e.g. 19.999)

let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setAgainGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  
  displayMessage("Start guessing...");
  
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222"; // to black color
  document.querySelector(".number").style.width = "15rem";
}

// Again btn
document.querySelector(".again").addEventListener("click", function ()  {
  setAgainGame();
});

// Check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!")

    // When player wins
  } else if (guess == secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct Number!");

    document.querySelector("body").style.backgroundColor = "#5cd65c";  // to green color
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else {
    if (score > 1) {
      const result = guess < secretNumber ? "Too low!" : "Too high!";
      displayMessage(result);

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
