// task 1
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let image = document.querySelector(".image");

increase.addEventListener("click", () => {
  image.style.width = "600px";
});

decrease.addEventListener("click", () => {
  image.style.width = "400px";
});

// task 2
function toRed() {
  document.getElementById("toRed").style.color = "red";
}

function toBlue() {
  document.getElementById("toBlue").style.color = "blue";
}

function toGreen() {
  document.getElementById("toGreen").style.color = "green";
}

//task 3
let texts = document.querySelector(".texts");

function show() {
  texts.style.display = "block";
}
function hide() {
  texts.style.display = "none";
}
