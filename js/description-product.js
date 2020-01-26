const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
/* pegando a ultima posição = tamanho do array -1 */
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

function handleClick() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}
function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}
function middleStar(index) {
  $stars.forEach(function($star, key) {
    $star.classList.remove("-active");
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

$stars.forEach(function($star, key) {
  if (key == 0) {
    /* primera posição */

    $star.addEventListener("click", firstStar);
  }
  if (key > 0 && key < positionLast) {
    /* posições do meio */
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
  if (key == positionLast) {
    /* última posição */
    $star.addEventListener("click", lastStar);
  }
});
