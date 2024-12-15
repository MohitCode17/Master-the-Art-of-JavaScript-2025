const startBtnEl = document.querySelector(".start_btn");
const stopBtnEl = document.querySelector(".stop_btn");
const resetBtnEl = document.querySelector(".reset_btn");
const timerEl = document.querySelector(".timer");

let interval;
let timeLeft = 1500; // In seconds = 25 minutes

// UPDATE TIMER (IN MINUTES & SECONDS)
const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60; // whatevev the remainder, become seconds

  const formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formatedTime;
};

// START TIMER FUNCTIONALITY
const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    // IF TIMER IS 00:00
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};

// STOP TIMER FUNCTIONALITY
const stopTimer = () => {
  clearInterval(interval);
};

// RESET TIMER FUNCTIONALITY
const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);
