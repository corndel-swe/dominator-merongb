// TODO: get a reference to the .box element and log it to the console
const box = document.getElementsByClassName("box");

console.dir(box[0]);

box[0].style.backgroundColor = "red";

box[0].addEventListener("click", () => {
  box[0].classList.toggle("left");
});

// TODO: add an event listener to the .box element that toggles the .left class

const button = document.getElementById("button");
const txt = document.getElementById("txt");
const output = document.getElementById("output");
// TODO: get a reference to #button, #txt and #output

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt

button.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerText = txt.value.toLowerCase();
});
