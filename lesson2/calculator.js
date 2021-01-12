// ask for first number
// ask for second number
// ask for operation
// perform the operation
// log to the console

const READLINE = require('readline-sync');

prompt("1 = English, 2 = Español");
let language = Number(READLINE.question());

while (![1, 2].includes(language)) {
  prompt("1 = English, 2 = Español");
  language = Number(READLINE.question());
}
  
let MESSAGES;

if (language === 1) {
  MESSAGES = require('./calculator_messages.json').english;
} else if (language === 2) {
  MESSAGES = require('./calculator_messages.json').spanish;
} else {
  MESSAGES = require('./calculator_messages.json').english; // default to english
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

while (true) {
  prompt(MESSAGES.firstNum);
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNum);
    number1 = READLINE.question();
  }

  prompt(MESSAGES.secondNum);
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNum);
    number2 = READLINE.question();
  }
  prompt(MESSAGES.operation);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOp);
    operation = READLINE.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(MESSAGES.result + output);

  prompt(MESSAGES.again);
  let answer = Number(READLINE.question());
  
  while (![1, 2].includes(answer)) {
    prompt(MESSAGES.invalidAnswer);
    answer = Number(READLINE.question());
  }
  if (answer === 2) break;
}