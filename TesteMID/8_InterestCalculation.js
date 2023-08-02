function calculate(initialCapital, interestRate, investmentTime) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const total = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTime);
  return total;
}

function program() {
  const inputCapital = prompt("Enter the initial capital:");
  const inputInterestRate = prompt("Enter the interest rate (in percentage, e.g., 5.5 for 5.5%):");
  const inputInvestmentTime = prompt("Enter the investment time (in months):");

  const initialCapital = parseFloat(inputCapital);
  const interestRate = parseFloat(inputInterestRate);
  const investmentTimeInMonths = parseInt(inputInvestmentTime);

  if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investmentTimeInMonths)) {
    alert("Please enter valid numbers.");
    return;
  }

  const finalValue = calculate(initialCapital, interestRate, investmentTimeInMonths);
  alert(`The final value of the investment is: ${finalValue.toFixed(2)}`);
}

program();
