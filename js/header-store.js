const $iconSearch = document.querySelector(".search-icon");
const $input = document.querySelector("[type=search]");

$iconSearch.addEventListener("click", () => {
  $input.classList.toggle("-active");
  $iconSearch.classList.toggle("-active");
});
