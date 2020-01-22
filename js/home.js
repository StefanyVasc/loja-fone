const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-cart");
  $carrinho.textContent = "Mundando valor";
}
