const $menu = document.querySelector(".menu-hamburguer");
const $navigation = document.querySelector(".navigation");
const $links = $navigation.querySelectorAll(".action");

$menu.addEventListener("click", () => {
  $links.forEach($links => {
    $links.classList.toggle("-active");
  });
});
