/* 
1 - Ter o browser na mão
2 - Ter o HTML na mão
3 - Pegar o coração
4 - Pegar o clique no coração 
5 - No momento que o usuário clicar mostrar um texto na tela
*/

const $heart = window.document.querySelector(".-heart");

/* pegando o clique no heart */
$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}
