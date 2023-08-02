function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function printPrimes(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

const primes = 10;
const primeNumbers = printPrimes(primes);
console.log(`${primes} prime numbers are: ${primeNumbers.join(', ')}`);