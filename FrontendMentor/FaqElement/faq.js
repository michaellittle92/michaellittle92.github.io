document.querySelectorAll(".faq-container").forEach((faq) => {
  const buttonImage = faq.querySelector(".button img");
  const answer = faq.querySelector(".answer");

  buttonImage.addEventListener("click", () => {
    answer.classList.toggle("show-answer");
    buttonImage.classList.toggle("open-button");
  });
});
