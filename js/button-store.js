const $cart = window.document.querySelector(".-second");

var $textcart = window.document.querySelector(".-cart");

$cart.addEventListener("click", handleClick);

function handleClick() {
  console.log($cart, "foi clicado");
  /* alert("Você quer mesmo adicionar ao carrinho"); */
  $textcart.textContent = "FUNFOU!";
}
