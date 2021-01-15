const rlSync = require('readline-sync');

const MESSAGE = require('./mortgage_messages.json');

function prompt(key) {
  console.log(`=> ${MESSAGE[key]}`);
}

function retrieveInput(inputType, invalidInput) {
  prompt(inputType);
  let input = rlSync.question();
  while (invalidInput(input)) {
    prompt(`${inputType}Error`);
    input = rlSync.question();
  }
  return input;
}

function invalidLoan(amount) {
  amount = Number(amount);
  return isNaN(amount) || amount <= 0;
}

function invalidAPR(amount) {
  amount = Number(amount);
  return isNaN(amount) || amount < 0;
}

function invalidDuration(amount) {
  amount = Number(amount);
  return isNaN(amount) || amount <= 0;
}

function calcMonthlyInterest(annual) {
  return annual / 1200;
}

function calcPayments(loan, interest, duration) {
  if (interest === 0) {
    return (loan / duration).toFixed(2);
  } else {
    return (loan * (interest / (1 - Math.pow((1 + interest),
      (-duration))))).toFixed(2);
  }
}

function repeat() {
  prompt("again");
  let answer = rlSync.question().toUpperCase();

  while (!["Y","N"].includes(answer)) {
    prompt("againError");
    answer = rlSync.question().toUpperCase();
  }

  return answer;
}

function calcAndDisplay() {
  let loanAmount = retrieveInput("loan",invalidLoan);
  let apr = retrieveInput("percent", invalidAPR);
  let monthlyInterest = calcMonthlyInterest(apr);
  let numOfMonths = retrieveInput("duration", invalidDuration);
  let monthlyPayment = calcPayments(loanAmount,monthlyInterest,numOfMonths);
  console.log(`=> Given a loan amount of $${loanAmount} and an APR of ${apr}%, your monthly payment comes out to $${monthlyPayment} for ${numOfMonths} months.`);
}

prompt("welcome");

while (true) {
  calcAndDisplay();
  if (repeat() === "N") break;
  console.clear();
}