const randomNumber = Math.random();
const userGuess = prompt("Guess Heads or Tails").toLowerCase();
let result;

if (randomNumber < 0.5) {
  result = "heads";
} else {
  result = "tails";
}

if (result === userGuess) {
  alert("You win!");
} else {
  alert("You lose!");
}
