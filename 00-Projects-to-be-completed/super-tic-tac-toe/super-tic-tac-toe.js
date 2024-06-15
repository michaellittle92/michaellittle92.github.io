let playerOne;
let playerTwo;

let playerOneScore = 0;
let playerTwoScore = 0;

let currentplayer = 0;

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", selectedSquare);
}

function selectedSquare(i) {
  console.log("click " + i);
}
