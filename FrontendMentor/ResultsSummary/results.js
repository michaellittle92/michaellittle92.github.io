const results = [];

async function GetData() {
  const url = `data-01.json`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    for (let i = 0; i < json.length; i++) {
      results.push(json[i].score);
    }
  } catch (error) {
    console.error(error.message);
  }
}

function GetTotalScore(results) {
  let sum = 0;
  for (let i = 0; i < results.length; i++) {
    sum += results[i];
  }
  let totalScore = sum / results.length;
  return Math.round(totalScore);
}

async function AnimateTotalScore(totalScore) {
  let userScore = document.querySelector(".user-score");

  for (let i = 0; i <= totalScore; i++) {
    setTimeout(() => {
      userScore.innerText = i;
    }, i * 7);
  }
}

function UpdateCategoryScores(results) {
  const summaryElementScores = document.querySelectorAll(
    ".summary-element-score"
  );
  for (let i = 0; i < results.length; i++) {
    summaryElementScores[i].innerText = results[i];
  }
}

async function main() {
  await GetData();
  UpdateCategoryScores(results);
  const totalScore = GetTotalScore(results);
  AnimateTotalScore(totalScore);
}

main();
