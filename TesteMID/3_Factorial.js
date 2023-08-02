function factorial(number) {
    let result = 1;

    if(isNaN(number) || number < 0){
        console.log("That's not a positive number");
    }    
    for(n = number; n > 0; n--) {
        result = result * n;
    }
    return result;    
}

function calculateFactorial() {
  const input = prompt("Enter a number to calculate:");
  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
  } else {
    const result = factorial(number);
    alert(`The factorial of ${number} is: ${result}`);
  }
}

calculateFactorial();