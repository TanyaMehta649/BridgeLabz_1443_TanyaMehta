//PROBLEM 1
// Write a program that takes a command-line argument n and prints a table of the 
// powers of 2 that are less than or equal to 2^n.
// Get the command-line argument for n
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
  console.log("Please provide a valid non-negative integer for n.");
} else {
  console.log(`Table of powers of 2 (up to 2^${n}):`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${2 ** i}`);
  }
}
//PROBLEM 2
// Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form Hn=1/1+1/2+1/3+1/4....1/n
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n <= 0) {
  console.log("Please provide a positive integer value for n.");
  process.exit(1);
}

// Calculate the nth harmonic number
let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
  harmonicNumber += 1 / i;
}

// Print the result
console.log(`The ${n}th harmonic number (H${n}) is: ${harmonicNumber.toFixed(5)}`);
//PROBLEM 3
//Write a program that takes a input and determines if the number is a prime
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
        return true;
    }
    const num=parseInt(prompt("Enter a no to check if it is prime or not"));

}
//PROBLEM 4
// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Take range input from the user
  const start = parseInt(prompt("Enter the start of the range:"));
  const end = parseInt(prompt("Enter the end of the range:"));
  
  // Validate input and find primes
  if (isNaN(start) || isNaN(end) || start > end) {
    console.log("Invalid input! Make sure start <= end and both are valid numbers.");
  } else {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) primes.push(i); // Add prime numbers to the list
    }
    console.log(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
  }
  
//PROBLEM 5
// Write a program that computes a factorial of a number taken as input.
function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }
  
  // Take input from the user
  const num = parseInt(prompt("Enter a number to compute its factorial:"));
  
  // Validate input and compute factorial
  console.log(
    isNaN(num)
      ? "Please enter a valid number."
      : num < 0
      ? "Factorial is not defined for negative numbers."
      : `The factorial of ${num} is: ${factorial(num)}`
  );
  