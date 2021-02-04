const readline = require('readline-sync');
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_POINTS = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(arr, delim = ', ', conj = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${conj} `);
    default:
      return arr.slice(0, arr.length - 1).join(delim) + `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

function displayBoard(board) {
  if (Object.keys(board).every((elem) => elem === '')) {
    console.clear();
  }

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = square;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] !== HUMAN_MARKER &&
    board[key] !== COMPUTER_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  
  if (!square) {
    if (board['5'] === 5) square = 5;
    else {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      square = emptySquares(board)[randomIndex];
    }
  }

  board[square] = COMPUTER_MARKER;
  prompt(`Computer chose square number ${square}.`);
}

function chooseSquare(board, currentPlayer) {
  return currentPlayer === 'player' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] !== HUMAN_MARKER &&
      board[square] !== COMPUTER_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function displayScores(board, roundNumber, playerScore, computerScore) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won round ${roundNumber}!`);
    if (detectWinner(board) === 'Player') {
      playerScore++;
    } else {
      computerScore++;
    }
  } else {
    prompt("It's a tie!");
  }
  prompt(`Your Score:     ${playerScore}`);
  prompt(`Computer Score: ${computerScore}`);
}

function nextRound(board, roundNumber) {
  displayBoard(board);
  prompt('Press Enter to continue.');
  readline.question();
  return roundNumber + 1;
}

function matchWinner(playerScore, computerScore) {
  if (playerScore === MATCH_POINTS) {
    return 'Player';
  } else if (computerScore === MATCH_POINTS) {
    return 'Computer';
  }

  return null;
}

function playAgain() {
  prompt('Would you like to play another match? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!['y', 'n', 'yes', 'no'].includes(answer)) {
    prompt('Please enter y or n.');
    answer = readline.question().toLowerCase();
  }

  return answer[0] !== 'n';
}

// Game Start!

prompt(`Welcome to Tic Tac Toe! First one to ${MATCH_POINTS} points wins!`);

while (true) {

  let playerScore = 0;
  let computerScore = 0;
  let roundNumber = 1;

  prompt('Would you like to go first? (y/n)');
  let goFirst = readline.question().toLowerCase();

  while (!['y', 'n', 'yes', 'no'].includes(goFirst)) {
    prompt('Please enter y or n.');
    goFirst = readline.question().toLowerCase();
  }

  while (!matchWinner(playerScore, computerScore)) {
    let board = initializeBoard();

    let currentPlayer = goFirst === 'y' || goFirst === 'yes' ? 'player' : 'computer';

    prompt(`Round ${roundNumber}!`);

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayScores(board, roundNumber, playerScore, computerScore);
    roundNumber = nextRound(board, roundNumber);
  }

  prompt(`${matchWinner(playerScore, computerScore)} wins the match after ${roundNumber - 1} rounds!`);

  if (!playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');

// need to fix the scores, they are currently only in function scope. see the displayScores function and see if we can put it back into the gameplay loop.
// probably need a more elegant way to increment the round number than making nextRound return the updated number. that's not too cool
// eslint keeps saying to make the computerChoosesSquare function shorter. let's find out a way to do that. 
// remember to eslint