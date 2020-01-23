/* 
1 - Ter o browser na mão
2 - Ter o HTML na mão
3 - Pegar o coração
4 - Pegar o clique no coração 
5 - No momento que o usuário clicar mostrar um texto na tela
*/

const $heart = document.querySelector(".-heart");
const $star = document.querySelector(".-star");

/* pegando o clique no heart */
$heart.addEventListener("click", handleClick);
$star.addEventListener("click", starClick);

function handleClick() {
  /* if ($heart.classList.contains("-active")) {
    $heart.classList.remove("-active"); //quando tem a classe active
  } else {
    $heart.classList.add("-active"); // quando não tem a classe active
  } */
  $heart.classList.toggle("-active");
}

function starClick() {
  /* var $oneStar = document.querySelectorAll(".star-img"); */
  /* console.log($oneStar); */
  /* for (var index = 0; index < $star.childNodes.length; index++) {
    console.log($star.childNodes[index]); */
  /* console.log($oneStar[index]); 
  }*/
  for (var index = 0; index < $star.children.length; index++)
    if ($star.children[index].className == "star-img") {
      /* const $starItem = document.getElementsByClassName(".star-img"); */
      $star.classList.toggle("-click");
    }

  /* console.log($star); */
}
