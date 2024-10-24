// TODO: increment and decrement the count when the buttons are clicked

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
let count = Number(document.getElementById("count").innerText);

decrement.addEventListener("click", (e) => {
  e.preventDefault();
  count--;
  document.getElementById("count").innerText = count;
});

increment.addEventListener("click", (e) => {
  e.preventDefault();
  count++;
  document.getElementById("count").innerText = count;
});
