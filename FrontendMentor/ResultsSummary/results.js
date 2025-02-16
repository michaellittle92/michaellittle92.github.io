const results = [];

async function GetData() {
  const url = RandomJSONPicker();
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

function RandomJSONPicker() {
  const jsonOptions = [
    "data-01.json",
    "data-02.json",
    "data-03.json",
    "data-04.json",
  ];
  const randomNumber = Math.floor(Math.random() * jsonOptions.length);
  return jsonOptions[randomNumber];
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

function SetUserCategory(totalScore) {
  const overallResult = document.querySelector(".overall-result");

  // Remove existing category classes
  overallResult.classList.remove("poor", "ok", "great", "excellent");

  let category = "";
  if (totalScore < 25) {
    category = "Poor";
    overallResult.classList.add("poor");
  } else if (totalScore < 50) {
    category = "OK";
    overallResult.classList.add("ok");
  } else if (totalScore < 75) {
    category = "Great";
  } else {
    category = "Excellent";
    overallResult.classList.add("excellent");
  }

  document.querySelector(".user-category").innerText = category;
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
  SetUserCategory(totalScore);
  AnimateTotalScore(totalScore);
}

main();
