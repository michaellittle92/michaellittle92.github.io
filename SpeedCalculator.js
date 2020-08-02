function calc()
{
// let a = Number(document.querySelector("#hours").value);
let b = Number(document.querySelector("#minutes").value);
let c = Number(document.querySelector("#speed").value);

//let hours = (a * 60) * 60;
let seconds = b * 60;
let rate = c * 60;
let timeRemaining = seconds/rate;

document.querySelector("#result").innerHTML = timeRemaining;
}