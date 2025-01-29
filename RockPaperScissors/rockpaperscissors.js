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
  UpdateImage("player", "Rock");
  PlayGame("Rock");
}

function Paper() {
  UpdateImage("player", "Paper");
  PlayGame("Paper");
}

function Scissors() {
  UpdateImage("player", "Scissors");
  PlayGame("Scissors");
}

function reset() {
  const playerScore = document.querySelector(".player-score");
  const cpuScore = document.querySelector(".cpu-score");

  playerScore.textContent = 0;
  cpuScore.textContent = 0;

  UpdateImage("player", "empty");
  UpdateImage("cpu", "empty");
}

function UpdateImage(user, choice) {
  if (user == "player") {
    document.querySelector(
      ".player-image"
    ).src = `https://d29rj10jbycao7.cloudfront.net/RockPaperScissors/images/${choice.toLowerCase()}-250x250.png`;
  } else {
    document.querySelector(
      ".cpu-image"
    ).src = `https://d29rj10jbycao7.cloudfront.net/RockPaperScissors/images/${choice.toLowerCase()}-250x250.png`;
  }
}

function PlayGame(playerChoice) {
  const playerScore = document.querySelector(".player-score");
  const cpuScore = document.querySelector(".cpu-score");
  const status = document.querySelector(".status");

  const availableChoices = ["Rock", "Paper", "Scissors"];

  const cpuChoice = availableChoices[Math.floor(Math.random() * 3)];
  UpdateImage("CPU", cpuChoice);

  if (playerChoice === cpuChoice) {
    status.textContent = "Draw";
  } else if (
    (playerChoice === "Rock" && cpuChoice === "Scissors") ||
    (playerChoice === "Paper" && cpuChoice === "Rock") ||
    (playerChoice === "Scissors" && cpuChoice === "Paper")
  ) {
    status.textContent = "Win";
    playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
  } else {
    status.textContent = "Lose";

    cpuScore.textContent = (Number(cpuScore.textContent) + 1).toString();
  }
}
