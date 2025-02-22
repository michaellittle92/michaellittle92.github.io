document.getElementById("ratingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedRadio = document.querySelector('input[name="rating"]:checked');

  DisplayFormCompleteMessage(selectedRadio);
});

function DisplayFormCompleteMessage(rating) {
  const container = document.querySelector(".ratings-container");
  const thankyouDiv = document.createElement("div");
  thankyouDiv.className = "thankyou";

  const completeImage = document.createElement("img");
  completeImage.src = "images/illustration-thank-you.svg";
  completeImage.alt = "Thank you for completing the survery";
  completeImage.className = "thankyou-image";

  const ratingMessage = document.createElement("p");
  ratingMessage.innerText = `You selected ${rating.value} out of 5`;
  ratingMessage.className = "rating-message";

  const heading = document.createElement("h2");
  heading.innerText = "Thank you!";
  heading.className = "heading";

  const thankyouMessage = document.createElement("p");
  thankyouMessage.innerText =
    "  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  thankyouMessage.className = "thankyou-message";

  console.log("Selected rating:", rating.value);
  container.innerHTML = "";
  container.appendChild(thankyouDiv);
  thankyouDiv.appendChild(completeImage);
  thankyouDiv.appendChild(ratingMessage);
  thankyouDiv.appendChild(heading);
  thankyouDiv.appendChild(thankyouMessage);
}
