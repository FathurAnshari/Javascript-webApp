let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Fathur",
  chips: 250,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomcard = Math.floor(Math.random() * 13 + 1);
  if (randomcard === 1) {
    return 11;
  } else if (randomcard > 10) {
    return 10;
  } else {
    return randomcard;
  }
  // return randomcard;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo, You've got a Black Jack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let newCards = getRandomCard();
    sum += newCards;
    cards.push(newCards);
    renderGame();
    console.log(cards);
  }
}
