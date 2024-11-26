const rockBtnEl = document.getElementById("rock_btn");
const paperBtnEl = document.getElementById("paper_btn");
const scissorBtnEl = document.getElementById("scissor_btn");
const resetBtnEl = document.getElementById("reset_btn");

// ================================================================================================================
let score = JSON.parse(localStorage.getItem("rps_score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

// 👉 UPDATE SCORE
const updateScoreElement = () => {
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
};

updateScoreElement();

// 👉 COMPUTER MOVE LOGIC:-
const pickComputerMove = () => {
  const randomMove = Math.random();
  let computerMove = "";

  if (randomMove >= 0 && randomMove < 1 / 3) {
    // COMPUTER MOVE WILL BE ROCK
    computerMove = "rock";
  } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
    // COMPUTER MOVE WILL BE PAPER
    computerMove = "paper";
  } else if (randomMove >= 2 / 3 && randomMove < 1) {
    computerMove = "scissors";
  }

  return computerMove;
};

// ================================================================================================================

// 👉 PLAY GAME LOGIC:-
const playGame = (playerMove) => {
  // 1. WHEN GAME IS START, FIRST RANDOM MOVE IS GENERATED BY COMPUTER
  const computerMove = pickComputerMove();
  let result;

  // 2. CHECK PLAYER MOVE && COMPUTER MOVE AND GET THE RESULT
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You Lose 😕";
    } else if (computerMove === "scissors") {
      result = "You Win 🎉";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win 🎉";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You Lose 😕";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose 😕";
    } else if (computerMove === "paper") {
      result = "You Win 🎉";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  // TODO: UPDATE SCORE
  if (result === "You Win 🎉") {
    score.wins += 1;
  } else if (result === "You Lose 😕") {
    score.loses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  // SET TO LOCALSTORAGE TO PERSIST SCORE DATA
  localStorage.setItem("rps_score", JSON.stringify(score));
  updateScoreElement();

  // UPDATE HTML RESULT & MOVE ELEMENT
  document.querySelector(".result").innerHTML = result;
  document.querySelector(".move").innerHTML = `You picked
  <img src="images/${playerMove}-emoji.png"> - Computer picked
  <img src="images/${computerMove}-emoji.png">  
`;
};

// ================================================================================================================

// 👉 ADD EVENTS ON ALL OF THE ACTION BUTTONS
rockBtnEl.addEventListener("click", () => {
  // CLICKING ON ROCK BUTTON WILL START THE GAME AND PASSED USER CHOISE AS ROCK
  playGame("rock");
});

paperBtnEl.addEventListener("click", () => {
  // CLICKING ON PAPER BUTTON WILL START THE GAME AND PASSED USER CHOISE AS PAPER
  playGame("paper");
});

scissorBtnEl.addEventListener("click", () => {
  // CLICKING ON SCISSOR BUTTON WILL START THE GAME AND PASSED USER CHOISE AS SCISSOR
  playGame("scissors");
});

// ================================================================================================================

// 👉 RESET SCORE AND GAME
resetBtnEl.addEventListener("click", () => {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("rps_score");
  updateScoreElement();
  alert("Score Reset.");
});

// ================================================================================================================

// 👉 PLAY GAME USING KEYS LIKE (R - ROCK, P - PAPER, S - SCISSORS)
document.body.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    playGame("rock");
  } else if (e.key === "p") {
    playGame("paper");
  } else if (e.key === "s") {
    playGame("scissors");
  }
});
