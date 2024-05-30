init();

async function init() {
  let currentletterindex = 1;
  lengthLimit = 6;
  counter = 0;
  const WordOftheDayURL = "https://words.dev-apis.com/word-of-the-day";
  let wordOfTheDay = "";
  let currentGuess = "";

  const res = await fetch(WordOftheDayURL);
  const resObj = await res.json();
  wordOfTheDay = resObj.word.toUpperCase();

  console.log("word of the day: " + wordOfTheDay);

  document.onkeydown = function (event) {
    if (event.key === "Backspace") {
      HandleBackspace();
    } else if (event.key === "Enter") {
      CheckWord();
    } else if (isLetter(event.key)) {
      HandleLetter(event.key.toUpperCase());
    }
  };

  function HandleLetter(letter) {
    if (currentletterindex < lengthLimit) {
      let targetedBox = document.querySelector(
        `#letter-box-${currentletterindex}`
      );
      let letterValue = document.createTextNode(letter);
      targetedBox.appendChild(letterValue);
      currentletterindex++;
      counter++;
      console.log(`Counter: ${counter}`);
      currentGuess += letter;
      console.log("current Guess: ", currentGuess);
    } else {
      return;
    }
  }

  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }

  function HandleBackspace() {
    if (currentletterindex > 1 && counter > 0) {
      currentletterindex--;
      counter--;
      console.log("backspace pressed");
      let targetedBox = document.querySelector(
        `#letter-box-${currentletterindex}`
      );
      targetedBox.innerHTML = "";
      targetedBox.appendChild(document.createTextNode(""));
      currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    } else {
      return;
    }
  }

  function CheckWord() {
    if (currentGuess === wordOfTheDay) {
      console.log("winner.");
    } else {
      //if wrong go to new run this code {
      //Validate the word.
      let wordisValid = true;
      if (wordisValid && lengthLimit <= 30 && counter === 5) {
        console.log("this is where ill need to check the word");

        lengthLimit += 5;
        console.log(lengthLimit);
        counter = 0;
        //}
      }
      currentGuess = "";
    }
  }
}
