// construir minha classe

class MemoryGame {
  constructor() {
    this.userName = ""; //vai vir do inputName
    this.points = 10; //estado de derrota quando points <= 0
    this.deck = [
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
    ];
    this.cardsSelected = [];
  }

  renderDeck() {
    //randomizar a array this.deck e entregar ela pro forEach já randomizada.
    let deckRandom = this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    //capturando o meu board
    let board = document.querySelector("#board");

    //iterar pelo meu deck
    deckRandom.forEach((imgSrc) => {
      let imgTag = document.createElement("img"); // <img />
      imgTag.src = imgSrc; // <img src="./assets/algumacoisa.svg" /> FRONT - CARD
      imgTag.classList.add("hide"); // <img src="./assets/algumacoisa.svg" class="hide" />

      let backImg = document.createElement("img"); // <img />
      backImg.src = "./assets/fe.svg";
      backImg.classList.add("show");

      board.appendChild(imgTag);
      board.appendChild(backImg);
    });
  }

  flip(card) {
    //pegar a carta virada e adicionar na array this.cardsSelected
    this.cardsSelected.push(card);

    if (this.cardsSelected.length === 2) {
      console.log("duas cartas selecionadas. vamos checar se elas são iguais");
      this.checkPair();
    }
  }

  checkPair() {
    if (this.cardsSelected[0].src === this.cardsSelected[1].src) {
      console.log("cartas iguais! Acertou! :D");

    } else {
      console.log("Errou!! Cartas diferentes");
      this.points -= 2
      
    }
  }
}
