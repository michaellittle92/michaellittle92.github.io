document.addEventListener("DOMContentLoaded", () => {
  // Initialization
  initialize();
});

async function initialize() {
  try {
    await fetchAndDisplayQuote();
    setRandomBackgroundColor();
  } catch (error) {
    console.error("Initialization failed:", error.message);
  }
}

async function fetchAndDisplayQuote() {
  const URL =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
  const setupElement = document.querySelector("#setup");
  const punchlineElement = document.querySelector("#punchline");
  const loaderElement = document.querySelector("#loader");

  // Reset visibility
  loaderElement.style.display = "block";
  setupElement.style.display = "none";
  punchlineElement.style.display = "none";

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    if (json.type !== "twopart") {
      throw new Error("Unexpected response format");
    }

    // Update DOM with the joke
    setupElement.textContent = json.setup;
    punchlineElement.textContent = json.delivery;

    // Update visibility
    loaderElement.style.display = "none";
    setupElement.style.display = "block";
    punchlineElement.style.display = "block";
  } catch (error) {
    setupElement.textContent =
      "Oops! Something went wrong. Please try again later.";
    punchlineElement.textContent = "";
    loaderElement.style.display = "none";
    console.error("Fetch failed:", error.message);
  }
}

function setRandomBackgroundColor() {
  const container = document.querySelector("#container");
  const randomColor = generateRandomPastelColor();
  container.style.backgroundColor = randomColor;
}

function generateRandomPastelColor() {
  const hue = getRandomInt(360); // Random hue
  const saturation = 80 + getRandomInt(20); // Saturation range [80%, 100%]
  const lightness = 85 + getRandomInt(10); // Lightness range [85%, 95%]
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
