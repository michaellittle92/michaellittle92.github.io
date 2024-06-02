let toggles = document.querySelectorAll(".toggle");
let questions = document.querySelectorAll(".faq-element h3");

console.log(questions.length);

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", function () {
    document.getElementById(`answer-${i}`).classList.toggle("hidden");
    toggles[i].classList.toggle("selected");
    if (toggles[i].innerText === "+") {
      toggles[i].innerText = "-";
    } else {
      toggles[i].innerText = "+";
    }
  });
}

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    document.getElementById(`answer-${i}`).classList.toggle("hidden");
    toggles[i].classList.toggle("selected");
    if (toggles[i].innerText === "+") {
      toggles[i].innerText = "-";
    } else {
      toggles[i].innerText = "+";
    }
  });
}
