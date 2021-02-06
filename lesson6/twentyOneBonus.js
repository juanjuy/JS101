const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const MAX_CARD_VALUE = 21;
const DEALER_LIMIT = 17;

const SCORE_TO_WIN = 5;

let roundNumber = 0;

let scores = {
  player: 0,
  dealer: 0,
  ties: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
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
    if (sum > MAX_CARD_VALUE) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > MAX_CARD_VALUE;
}

function compareCards(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > MAX_CARD_VALUE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_CARD_VALUE) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayRoundResults(dealerCards, playerCards) {
  let result = compareCards(dealerCards, playerCards);

  console.log('==============');
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${total(playerCards)}`);
  console.log('==============');

  if (result === 'PLAYER_BUSTED') {
    prompt('You busted! Dealer wins!');
  } else if (result === 'DEALER_BUSTED') {
    prompt('Dealer busted! You win!');
  } else if (result === 'PLAYER') {
    prompt('You win!');
  } else if (result === 'DEALER') {
    prompt('Dealer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function returnRoundWinner(dealerTotal, playerTotal) {
  if (dealerTotal > MAX_CARD_VALUE) {
    return 'player';
  } else if (playerTotal > MAX_CARD_VALUE) {
    return 'dealer';
  } else if (dealerTotal > playerTotal) {
    return 'dealer';
  } else if (playerTotal > dealerTotal) {
    return 'player';
  } else {
    return 'ties';
  }
}

function hitOrStay() {
  prompt('Would you like to (h)it or (s)tay?');
  let answer = readline.question().toLowerCase();
  while (!['h', 's', 'hit', 'stay'].includes(answer)) {
    prompt("Sorry, must enter 'h' or 's'.");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function scoreboard(scoreObj) {
  console.log(`Scores\nPlayer:  ${scoreObj.player}\nDealer:  ${scoreObj.dealer}\nTies:    ${scoreObj.ties}`);
  if (!matchIsOver(scoreObj)) {
    prompt('Press enter to continue.');
    readline.question();
    console.clear();
  }
}

function matchIsOver(scoreObj) {
  return (scoreObj.player === SCORE_TO_WIN || scoreObj.dealer === SCORE_TO_WIN);
}

function resetScores() {
  return {
    player: 0,
    dealer: 0,
    ties: 0
  };
}

function updateScores(scoreObj, winner) {
  scoreObj[winner] += 1;
}

function displayMatchWinner(scoreObj) {
  if (scoreObj.player === SCORE_TO_WIN) {
    prompt(`You have reached ${SCORE_TO_WIN} points, you win the match!`);
  } else {
    prompt(`The dealer has reached ${SCORE_TO_WIN} points, you lose the match :(`);
  }
}

function playAgain() {
  console.log('-------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question().toLowerCase();
  while (!['y', 'n', 'yes', 'no', 'yep', 'nah'].includes(answer)) {
    prompt('Please enter y or n.');
    answer = readline.question().toLowerCase();
  }
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function hiddenHand(cards) {
  return `${cards[1]}${cards[0]}`;
}

prompt(`Welcome to Twenty-One! First player to reach ${SCORE_TO_WIN} points wins!`);

while (true) {
  while (true) {
    roundNumber++;
    prompt(`Round ${roundNumber} starting!`);

    let deck = initalizeDeck();
    let playerCards = [];
    let dealerCards = [];

    // initial deal
    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));

    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    prompt(`Dealer has ${hiddenHand(dealerCards[0])}`);
    prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

    // player turn
    while (playerTotal < MAX_CARD_VALUE) {
      let playerTurn = hitOrStay()[0];

      if (playerTurn === 'h') {
        playerCards.push(deck.pop());
        playerTotal = total(playerCards);
        prompt('You chose to hit!');
        prompt(`Your cards are now: ${hand(playerCards)}`);
        prompt(`Your total is now: ${playerTotal}`);
      }

      if (playerTurn === 's' || busted(playerTotal)) break;
    }

    if (busted(playerTotal) || (playerTotal === MAX_CARD_VALUE)) {
      displayRoundResults(dealerCards, playerCards);
      updateScores(scores, returnRoundWinner(dealerTotal, playerTotal));
      scoreboard(scores);
      if (matchIsOver(scores)) break;
      continue;
    } else {
      prompt(`You stayed at ${playerTotal}`);
    }

    // dealer turn
    prompt('Dealer turn...');

    while (dealerTotal < DEALER_LIMIT) {
      prompt(`Dealer hits!`);
      dealerCards.push(deck.pop());
      dealerTotal = total(dealerCards);
      prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
    }

    if (busted(dealerTotal)) {
      prompt(`Dealer total is now: ${dealerTotal}`);
      displayRoundResults(dealerCards, playerCards);
      updateScores(scores, returnRoundWinner(dealerTotal, playerTotal));
      scoreboard(scores);
      if (matchIsOver(scores)) break;
      continue;
    } else {
      prompt(`Dealer stays at ${dealerTotal}`);
    }

    displayRoundResults(dealerCards, playerCards);
    updateScores(scores, returnRoundWinner(dealerTotal, playerTotal));
    scoreboard(scores);

    if (matchIsOver(scores)) break;
  }

  displayMatchWinner(scores);
  if (playAgain()) {
    scores = resetScores();
    roundNumber = 0;
    console.clear();
  } else {
    break;
  }
}