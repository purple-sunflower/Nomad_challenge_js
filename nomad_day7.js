const rngForm = document.querySelector("#rng-form");
const rangeNumInput = document.querySelector("#rng-form h2 #range-num");
const userNumInput = document.querySelector("#rng-form h3 #user-num");
const playBtn = document.querySelector("#rng-form h3 #playBtn");
const result = document.querySelector("#rng-form #result");
const winLose = document.querySelector("#rng-form #win-lose");

function playBtnSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeNumInput.value;
  const machineNum = Math.floor(Math.random() * rangeNum);

  const userNum = userNumInput.value;
  result.innerHTML =
    "You chose: " + userNum + ", the machine chose: " + machineNum;

  if (userNum == machineNum) {
    winLose.innerHTML = "You won!";
  } else {
    winLose.innerHTML = "You lost!";
  }
}

rngForm.addEventListener("submit", playBtnSubmit);
