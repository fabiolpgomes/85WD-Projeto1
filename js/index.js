//manipulo o dom

//instanciando nossa classe MemoryGame
const game = new MemoryGame();

const buttonStart = document.querySelector("#inicio button");
const inicio = document.querySelector("#inicio");
const inputName = document.querySelector("#inicio input");
const name = document.querySelector("#name");
const points = document.querySelector("#points");

buttonStart.addEventListener("click", () => {
  //criar as cartas randomizadas
  game.renderDeck();

  //apagar a tela de inicio
  inicio.style.display = "none";

  //setar o userName do atributo da classe
  game.userName = inputName.value;
  //adicionar o nome na div score
  name.innerText = game.userName;
  //adicionar os points na div score
  points.innerText = game.points;

  settingUpGame();
});

function settingUpGame() {
  const allCardsBack = document.querySelectorAll(".show");

  allCardsBack.forEach((cardBack) => {
    //para cada carta verde, criar um event Listener para cada
    cardBack.addEventListener("click", () => {
      let cardFront = cardBack.previousElementSibling;

      cardBack.className = "hide";
      cardFront.className = "show";

      game.flip(cardFront);
    });
  });
}
