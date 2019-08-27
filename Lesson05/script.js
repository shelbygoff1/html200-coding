//default balance is zero. Declare balance variable
let balance = 0;
let loop = true;

function BalancePrompt() {
  if (balance < 300) alert('Warning: Your balance is less than $300.');
  loop = true;
  }
  while (loop) {
    let input = prompt('What would you like to do? B: View your Balance, D: Make a Deposit, W: Make a Withdrawal, Q: Close MeBank App');

  if (input === 'Q') {
    loop = false;
    break;
    }
  else if (input === 'W') {
    makeWithdrawl();
    }
  else if (input === 'D') {
    makeDeposit();
    }
  else if (input === 'B') {
    showBalance();
    }
  else {
    alert('I don\'t understand that command. Please try again.');
    }
}

function showBalance() {
  alert('Your balance is currently $' + (balance));
}

function makeWithdrawl() {
  let amountWithdrawn = Number(prompt("How much would you like to withdraw?"));
  let newBalance = (balance - amountWithdrawn);

  balance = newBalance;
  showBalance();
}

function makeDeposit() {
  let depositAmount = Number(prompt("How much would you like to deposit?"));
  let newBalance = (balance + depositAmount);

  balance = newBalance;
  showBalance();
  }

//quit the app
function handlerQuit() {
  loop = false;
}
