const letters = document.querySelectorAll(".letter");
const message = document.querySelector(".message");
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

async function init() {
  let currentGuess = "";
  let currentRow = 0;
  let gameOver = false;
  let isLoading = true;

  setLoading(true);

  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const resObj = await res.json();
  const word = resObj.word.toUpperCase();
  const wordParts = word.split("");

  //turn off loading animation;

  console.log(word);
  isLoading = false;
  setLoading(false);

  function addLetter(letter) {
    //add letter to the end of the current guess
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      //replace the last letter
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText =
      letter;
  }

  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }

    // TODO: validate word.

    isLoading = true;
    setLoading(true);

    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });

    const resObj = await res.json();
    const validWord = resObj.validWord;

    isLoading = false;
    setLoading(false);

    if (!validWord) {
      markInvalidWord();
      return;
    }

    // marking correct close or incorrect.

    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    console.log(map);

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      //mark as correct
      if (guessParts[i] === wordParts[i]) {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        //do nothing. class already assigned
      } else if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
        //mark as close
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("incorrect");
      }
    }

    //check wining state

    if (currentGuess === word) {
      gameOver = true;
      alert("winner");
    }
    currentRow++;
    currentGuess = "";

    if (currentRow === ROUNDS) {
      gameOver = true;
      alert(`you loose. the word was ${word}`);
    }
  }

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
  }

  function markInvalidWord() {
    //alert("not valid word");

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");
      setTimeout(function () {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid");
      }, 20);
    }
  }

  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (gameOver || isLoading) {
      //do nothing
      return;
    }

    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // doesnt do anything;
    }
  });

  function setLoading(isLoading) {
    message.classList.toggle("show", isLoading);
  }

  function makeMap(array) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
      const letter = array[i];
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
    return obj;
  }
}

init();
