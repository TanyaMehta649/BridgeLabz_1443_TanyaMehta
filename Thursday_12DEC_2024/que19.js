// Create a function that will return in an array the first “p” prime numbers greater than “n”
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findPrimesGreaterThanN(n, p) {
    let primes = [];
    let num = n + 1; 
  
    while (primes.length < p) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }
  
  console.log(findPrimesGreaterThanN(10, 5));   