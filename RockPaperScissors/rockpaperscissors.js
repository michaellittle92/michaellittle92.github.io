const buttons = document.querySelectorAll(".game-buttons");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    ButtonSwitch(buttons[i].id);
  });
}

function ButtonSwitch(input) {
  switch (input) {
    case "rock":
      Rock();
      break;
    case "paper":
      Paper();
      break;
    case "scissors":
      Scissors();
      break;
    case "reset":
      reset();
      break;
    default:
      console.log("an error has occoured");
  }
}

function Rock() {
  UpdateImage("player", "rock");
  PlayGame("rock");
}

function Paper() {
  UpdateImage("player", "paper");
  PlayGame("paper");
}

function Scissors() {
  UpdateImage("player", "scissors");
  PlayGame("scissors");
}

function UpdateImage(user, option) {
  let image;
  if (user === "player") {
    image = document.querySelector(".player-image");
  } else if (user === "cpu") {
    image = document.querySelector(".cpu-image");
  }

  if (image) {
    image.classList.remove("rock", "paper", "scissors", "empty");
  }

  if (option === "rock") {
    image.classList.add("rock");
  }
  if (option === "paper") {
    image.classList.add("paper");
  }
  if (option === "scissors") {
    image.classList.add("scissors");
  }
  if (option === "empty") {
    image.classList.add("empty");
  }
}

function reset() {
  const playerScore = document.querySelector(".player-score");
  const cpuScore = document.querySelector(".cpu-score");
  const status = document.querySelector(".status");

  status.textContent = "";
  playerScore.textContent = 0;
  cpuScore.textContent = 0;

  UpdateImage("player", "empty");
  UpdateImage("cpu", "empty");
}

function PlayGame(playerChoice) {
  const playerScore = document.querySelector(".player-score");
  const cpuScore = document.querySelector(".cpu-score");
  const status = document.querySelector(".status");

  const availableChoices = ["rock", "paper", "scissors"];

  const cpuChoice = availableChoices[Math.floor(Math.random() * 3)];
  console.log(cpuChoice);
  UpdateImage("cpu", cpuChoice);

  if (playerChoice === cpuChoice) {
    status.textContent = "Draw";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    status.textContent = "Win";
    playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
  } else {
    status.textContent = "Lose";

    cpuScore.textContent = (Number(cpuScore.textContent) + 1).toString();
  }
}
