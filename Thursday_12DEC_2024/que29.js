//Print the distance between the first 100 prime numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function first100Primes() {
    let primes = [];
    let num = 2; 
  
    while (primes.length < 100) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }
  
  function primeDistances() {
    const primes = first100Primes();
    let distances = [];
  
    for (let i = 1; i < primes.length; i++) {
      distances.push(primes[i] - primes[i - 1]); 
    }
  
    return distances;
  }
  
  const distances = primeDistances();
  console.log( distances);
  