//Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function sumFirst100Primes() {
    let primes = [];
    let sum = 0;
    let num = 2; 
  
    while (primes.length < 100) {
      if (isPrime(num)) {
        primes.push(num);
        sum += num; 
      }
      num++;
    }
  
    return { sum, primes }; 
  }
  

  const result = sumFirst100Primes();
  console.log(result.sum);
  console.log(result.primes);
  