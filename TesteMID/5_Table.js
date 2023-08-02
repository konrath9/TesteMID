function table(number) {
    
  console.log(`table for ${number}:`);
    
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }    
}

function program() {
  const input = prompt("Enter a number to display its table:");
  const number = parseFloat(input);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
  } else {
    table(number);
  }
}

program();