const WINNING_COMBOS = {
  rock: {
    scissors: { verb: "smashes" },
    lizard: { verb: "crushes" },
  },
  scissors: {
    paper: { verb: "cuts" },
    lizard: { verb: "decapitates" },
  },
  lizard: {
    spock: { verb: "poisons" },
    paper: { verb: "eats" },
  },
  spock: {
    scissors: { verb: "dismantles" },
    rock: { verb: "vaporizes" },
  },
  paper: {
    spock: { verb: "disproves" },
    rock: { verb: "covers" },
  }
};

const OPTIONS_ARRAY = Object.keys(WINNING_COMBOS);

const readline = require('readline-sync');

const WINNING_SCORE = 3;

let userScore = 0;
let cpuScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getUserInput() {
  prompt('Please select Rock (r), Paper (p), Scissors (s), Lizard (l), or Spock (sp).');
  let input = partialMatch(readline.question().toLowerCase());
  while (invalidChoice(input)) {
    prompt('Please enter a valid choice.');
    input = partialMatch(readline.question().toLowerCase());
  }
  return input;
}

function partialMatch(choice) {
  if (choice.trim().length > 0) {
    for (let index = 0; index < OPTIONS_ARRAY.length; index++) {
      if (OPTIONS_ARRAY[index].substring(0,choice.length) === choice) {
        return OPTIONS_ARRAY[index];
      }
    }
  }
  return choice;
}

function invalidChoice(choice) {
  return (!OPTIONS_ARRAY.includes(choice));
}

function getCPUChoice() {
  let randomIndex = Math.floor(Math.random() * OPTIONS_ARRAY.length);
  let choice = OPTIONS_ARRAY[randomIndex];
  prompt(`CPU chose ${choice}`);
  return choice;
}

function findVerb(winner, loser) {
  return WINNING_COMBOS[winner][loser]["verb"];
}

function displayWinner(user, cpu) {
  if (WINNING_COMBOS[user][cpu] !== undefined) {
    let verb = findVerb(user,cpu);
    prompt(`${capitalize(user)} ${verb} ${capitalize(cpu)}, 1 point for you!`);
    userScore += 1;
  } else if (user === cpu) {
    prompt("It's a tie!");
  } else {
    let verb = findVerb(cpu, user);
    prompt(`${capitalize(cpu)} ${verb} ${capitalize(user)}, 1 point for CPU.`);
    cpuScore += 1;
  }
}

function checkAndDisplayScores() {
  if (userScore === WINNING_SCORE) {
    prompt('You got 3 points, you win!');
  } else if (cpuScore === WINNING_SCORE) {
    prompt('CPU got 3 points, you lose.');
  } else {
    console.log(`Score\nYou: ${userScore}\nCPU: ${cpuScore}`);
  }
}

function playAgain() {
  prompt('Would you like to play again? yes / no');
  let answer = readline.question().toUpperCase();

  while (!["Y","N", "YES", "NO"].includes(answer)) {
    prompt('Please enter yes or no.');
    answer = readline.question().toUpperCase();
  }

  if (answer === "Y") {
    userScore = 0;
    cpuScore = 0;
    console.clear();
  }
}

prompt("Welcome to Rock-Paper-Scissors-Lizard-Spock! Let's play a best-of-five.");

while (userScore < WINNING_SCORE && cpuScore < WINNING_SCORE) {
  let userChoice = getUserInput();
  let cpuChoice = getCPUChoice();
  displayWinner(userChoice, cpuChoice);
  checkAndDisplayScores();
  if (userScore === WINNING_SCORE || cpuScore === WINNING_SCORE) {
    playAgain();
  }
}
