// TODO: add an event listener to the .box element that toggles the .red class

const box = document.getElementsByClassName("box");
console.log(box[0]);

box[0].addEventListener("click", () => {
  box[0].classList.toggle("red");
});
