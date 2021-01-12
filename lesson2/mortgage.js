const rlSync = require('readline-sync');

function prompt(str) {
  console.log(`=> ${str}`);
}

// get loan amount
function loanInput() {
  // input loan amount
  prompt("Please enter your loan amount.");
  let loanAmount = Number(rlSync.question().replace('$','').replace(/,/g,''));

  // validate loan amount
  while (isNaN(loanAmount) || loanAmount <= 0) {
    prompt("Please enter a valid loan amount.");
    loanAmount = Number(rlSync.question().replace('$','').replace(/,/g,''));
  }

  return loanAmount;
}

// get apr
function aprInput() {
  // input apr
  prompt("Please enter your Annual Percentage Rate (APR) as a decimal, like 0.05.");
  let rawAPR = rlSync.question();
  let apr = Number(rawAPR.replace('%',''));

  // validate apr
  while (isNaN(apr) || apr < 0) {
    prompt("Please enter a valid APR.");
    rawAPR = rlSync.question();
    apr = Number(rawAPR.replace('%',''));
  }

  /* if apr is at least 1, or if raw input contains a %,
  divide apr by 100. meant to catch and fix user input errors */
  if (apr >= 1 || rawAPR.includes('%')) {
    apr /= 100;
  }

  return apr;
}

// calculate monthly interest
function calcMonthlyInterest(annual) {
  return annual / 12;
}

// get loan duration
function monthInput() {
  // input loan duration
  prompt("Please enter your loan duration in months.");
  let numOfMonths = Number(rlSync.question());

  // validate loan duration
  while (isNaN(numOfMonths) || numOfMonths <= 0) {
    prompt("Please enter a valid loan duration in months.");
    numOfMonths = Number(rlSync.question());
  }

  return numOfMonths;
}

// calculate monthly payments
function calcPayments(loan, interest, duration) {
  return (loan * (interest / (1 - Math.pow((1 + interest),
    (-duration))))).toFixed(2);
}

// prompt to go again
function repeat() {
  prompt("Would you like to calculate another monthly payment? Y / N");
  let answer = rlSync.question().toUpperCase();

  while (!["Y","N"].includes(answer)) {
    prompt("Please enter Y or N.");
    answer = rlSync.question().toUpperCase();
  }

  return answer;
}

// compile all numbers and display result
function calcAndDisplay() {
  let loanAmount = loanInput();
  let apr = aprInput();
  let monthlyInterest = calcMonthlyInterest(apr);
  let numOfMonths = monthInput();
  let monthlyPayment = calcPayments(loanAmount,monthlyInterest,numOfMonths);
  prompt(`Given a loan amount of $${loanAmount} and an APR of ${apr * 100}%, your monthly payment comes out to $${monthlyPayment} for ${numOfMonths} months.`);
}

// welcome
prompt("Welcome to the Mortgage Calculator! Get your monthly payment amount in 3 easy steps!");

// execute
while (true) {
  calcAndDisplay();
  let answer = repeat();
  if (answer === "N") break;
  console.clear();
}