const $search = document.querySelector("[type=search]");

const $searchOn = document.querySelector(".-on");
const $searchOff = document.querySelector(".-close");

$search.addEventListener("click", () => {
  $search.classList.toggle("-active");
  $searchOn.classList.toggle("-active");
  $searchOff.classList.toggle("-active");
});

console.log($searchOn.classList);
console.log($searchOff.classList);

/* $searchOn.addEventListener("click", () => {
  $searchOn.classList.toggle("-active");
});

function iconClick() {
  this.classList.toggle("-active");
} */
