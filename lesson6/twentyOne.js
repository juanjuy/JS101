// Initialize Deck
// Deal cards to player and dealer
// Player turn: hit or stay
// - repeat until bust or stay
// if player bust, dealer wins
// dealer turn: hit or stay
// - repeat until total >= 17
// if dealer busts, player wins
// Compare cards and declare winner

const readline = require('readline-sync');
let playerHand = [];
let dealerHand = [];
let deck = [];

function initializeGame() {
  deck = [['Hearts', '2'], ['Hearts', '3'], ['Hearts', '4'], ['Hearts', '5'], ['Hearts', '6'], ['Hearts', '7'],
    ['Hearts', '8'], ['Hearts', '9'], ['Hearts', '10'], ['Hearts', 'J'], ['Hearts', 'Q'], ['Hearts', 'K'], ['Hearts', 'A'],
    ['Diamonds', '2'], ['Diamonds', '3'], ['Diamonds', '4'], ['Diamonds', '5'], ['Diamonds', '6'], ['Diamonds', '7'],
    ['Diamonds', '8'], ['Diamonds', '9'], ['Diamonds', '10'], ['Diamonds', 'J'], ['Diamonds', 'Q'], ['Diamonds', 'K'], ['Diamonds', 'A'],
    ['Clubs', '2'], ['Clubs', '3'], ['Clubs', '4'], ['Clubs', '5'], ['Clubs', '6'], ['Clubs', '7'],
    ['Clubs', '8'], ['Clubs', '9'], ['Clubs', '10'], ['Clubs', 'J'], ['Clubs', 'Q'], ['Clubs', 'K'], ['Clubs', 'A'],
    ['Spades', '2'], ['Spades', '3'], ['Spades', '4'], ['Spades', '5'], ['Spades', '6'], ['Spades', '7'],
    ['Spades', '8'], ['Spades', '9'], ['Spades', '10'], ['Spades', 'J'], ['Spades', 'Q'], ['Spades', 'K'], ['Spades', 'A']
  ];

  playerHand = [];
  dealerHand = [];
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function hit(deck, hand, times = 1) {
  for (let idx = 0; idx < times; idx++) {
    hand[hand.length] = deck.pop();
  }
}

function checkHand(hand, currentTurn) {
  let niceHand = hand.map((elem) => {
    return `${elem[1]} of ${elem[0]}`;
  });
  prompt(`${currentTurn} has ${total(hand)}\n${niceHand.join('\n')}\n`);
}

function busted(hand) {
  return total(hand) > 21;
}

while (true) {
  initializeGame();
  shuffle(deck);
  let currentTurn = 'Player';
  hit(deck, playerHand, 2);
  checkHand(playerHand, currentTurn);

  while (true) {
    console.log("Hit or Stay?");
    let answer = readline.question().toLowerCase();

    while (!['hit', 'stay'].includes(answer)) {
      prompt('Please enter hit or stay.');
      answer = readline.question().toLowerCase();
    }

    if (answer === "stay") break;
    hit(deck, playerHand);
    checkHand(playerHand, currentTurn);
    if (busted(playerHand)) break;
  }

  if (busted(playerHand)) {
    prompt(`Your total is ${total(playerHand)}. You busted.`);
  } else {
    prompt(`You chose to stay with ${total(playerHand)}. Dealer's turn!`);
  }

  currentTurn = 'Dealer';
  if (!busted(playerHand)) {
    while (total(dealerHand) <= 17) {
      hit(deck, dealerHand);
      checkHand(dealerHand, currentTurn);
      prompt('Press enter to continue.');
      readline.question();
    }

    checkHand(dealerHand, currentTurn);

    if (busted(dealerHand)) {
      prompt('Dealer busted, you win!');
    } else if (total(playerHand) > total(dealerHand)) {
      prompt('Your hand is better than the dealer! You win!');
    } else if (total(playerHand) === total(dealerHand)) {
      prompt("It's a tie!");
    } else {
      prompt('The dealer has a better hand. You lose :(');
    }
  }

  prompt('Would you like to play again? (y/n)');
  let again = readline.question().toLowerCase();
  while (!['y', 'n', 'yes', 'no'].includes(again)) {
    prompt('Please enter y or n.');
    again = readline.question().toLowerCase();
  }

  if (again[0] === 'n') {
    prompt('Thanks for playing!');
    break;
  }
}