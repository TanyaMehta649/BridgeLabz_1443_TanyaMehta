// Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point ( 
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//  a. degF= (degC * 9/5) + 32
//  b. degC= (degF– 32) * 5/9
function temperatureConversion() {
    const choice = prompt("Enter 1 to convert Celsius to Fahrenheit, or 2 to convert Fahrenheit to Celsius:");
  
    if (choice === "1") { 
      const degC = parseFloat(prompt("Enter Celsius (0 to 100):"));
  
      if (degC >= 0 && degC <= 100) {
        const degF = (degC * 9/5) + 32;
        console.log(`${degC}°C = ${degF}°F`);
      } else {
        console.log("Invalid input! Enter a value between 0 and 100.");
      }
  
    } else if (choice === "2") {
      const degF = parseFloat(prompt("Enter Fahrenheit (32 to 212):"));
  
      if (degF >= 32 && degF <= 212) {
        const degC = (degF - 32) * 5/9;
        console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
      } else {
        console.log("Invalid input! Enter a value between 32 and 212.");
      }
  
    } else {
      console.log("Invalid choice! Please enter 1 or 2.");
    }
  }
  
  // Call the function
  temperatureConversion();
  //PROBLEM 2
  // Write a function to check if the two numbers are Palindromes
  function isPalindrome(num) {
    const str = num.toString();
    return str === str.split("").reverse().join("");
  }
  
  function checkTwoNumbers(num1, num2) {
    console.log(num1, isPalindrome(num1) ? "is a palindrome" : "is not a palindrome");
    console.log(num2, isPalindrome(num2) ? "is a palindrome" : "is not a palindrome");
  }
  
  // Example Usage
  checkTwoNumbers(121, 123);
    
//PROBLEM 3
//  Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime 
// b. Write function to get the Palindrome. 
// c. Check if the Palindrome number is also prime.
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If divisible by any number, not prime
    }
    return true;
  }
  
  // Function to get the palindrome of a number
  function getPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split("").reverse().join("");
    return parseInt(reversedStr, 10); // Return the palindrome as a number
  }
  
  // Function to check if the number and its palindrome are prime
  function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
  
      const palindrome = getPalindrome(num);
      console.log(`The palindrome of ${num} is ${palindrome}.`);
  
      if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
      } else {
        console.log(`The palindrome ${palindrome} is not a prime number.`);
      }
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  
  // Example Usage
  const number = parseInt(prompt("Enter a number to check if it's prime and if its palindrome is prime:"), 10);
  checkPrimeAndPalindrome(number);
  