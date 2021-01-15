const WINNING_COMBOS = {
  rock: {
    beats: ["scissors", "lizard"],
    verbs: ["smashes", "crushes"]
  },
  scissors: {
    beats: ["paper", "lizard"],
    verbs: ["cuts", "decapitates"],
  },
  lizard: {
    beats: ["spock", "paper"],
    verbs: ["poisons", "eats"]
  },
  spock: {
    beats: ["scissors", "rock"],
    verbs: ["dismantles", "vaporizes"]
  },
  paper: {
    beats: ["spock", "rock"],
    verbs: ["disproves", "covers"]
  }
};

const OPTIONS_ARRAY = Object.keys(WINNING_COMBOS);

const readline = require('readline-sync');

let userScore = 0;
let cpuScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function capitalize(str) {
  return str.substring(0,1).toUpperCase().
    concat(str.substring(1,str.length));
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
  let index = WINNING_COMBOS[winner].beats.indexOf(loser);
  return WINNING_COMBOS[winner].verbs[index];
}

function displayWinner(user, cpu) {
  if (WINNING_COMBOS[user].beats.includes(cpu)) {
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
  if (userScore === 3) {
    prompt('You got 3 points, you win!');
    playAgain();
  } else if (cpuScore === 3) {
    prompt('CPU got 3 points, you lose.');
    playAgain();
  } else {
    console.log(`Score\nYou: ${userScore}\nCPU: ${cpuScore}`);
  }
}

function playAgain() {
  prompt('Would you like to play again? Y / N');
  let answer = readline.question().toUpperCase();

  while (!["Y","N"].includes(answer)) {
    prompt('Please enter Y or N.');
    answer = readline.question().toUpperCase();
  }

  if (answer === "Y") {
    userScore = 0;
    cpuScore = 0;
    console.clear();
  }
}

prompt("Welcome to Rock-Paper-Scissors-Lizard-Spock! Let's play a best-of-five.");

while (userScore < 3 && cpuScore < 3) {
  let userChoice = getUserInput();
  let cpuChoice = getCPUChoice();
  displayWinner(userChoice, cpuChoice);
  checkAndDisplayScores();
}