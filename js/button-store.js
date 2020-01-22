const $cart = window.document.querySelector(".-second");

$cart.addEventListener("click", handleClick);

function handleClick() {
  console.log($cart, "foi clicado");
  alert("Você quer mesmo adicionar ao carrinho");
}
