//PROBLEM 1
// Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is //reached.
// Get the command-line argument for n
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
  console.log("Please provide a valid non-negative integer for n.");
} else {
  console.log(`Table of powers of 2 (up to 2^${n} or 256):`);
  let power = 1;
  for (let i = 0; i <= n && power <= 256; i++) {
    console.log(`2^${i} = ${power}`);
    power *= 2; // Compute the next power of 2
  }
}
//PROBLEM 2
// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached.
function findMagicNumber() {
    let low = 1;
    let high = 100;
  
    console.log("Think of a number between 1 and 100.");
  
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
  
      // Ask the user for feedback
      const response = prompt(`Is your number:\n1. Less than ${mid}?\n2. Greater than or equal to ${mid}?\nEnter 1 or 2:`);
  
      if (response === "1") {
        high = mid - 1; // Narrow the range to lower half
      } else if (response === "2") {
        low = mid; // Narrow the range to upper half
      } else {
        console.log("Invalid input. Please enter 1 or 2.");
      }
    }
  
    console.log(`Your magic number is ${low}!`);
  }
  
  // Call the function
  findMagicNumber();
  //PROBLEM 3
  // Extend the Flip Coin problem till either Heads or Tails wins 11 times. 
  function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
  
    console.log("Starting the coin flip game...");
  
    while (headsCount < 11 && tailsCount < 11) {
      // Simulate a coin flip (0 for tails, 1 for heads)
      const flip = Math.random() < 0.5 ? "Heads" : "Tails";
  
      if (flip === "Heads") {
        headsCount++;
      } else {
        tailsCount++;
      }
  
      console.log(`Flip: ${flip} | Heads: ${headsCount} | Tails: ${tailsCount}`);
    }
  
    // Determine the winner
    const winner = headsCount === 11 ? "Heads" : "Tails";
    console.log(`\n${winner} wins the game!`);
  }
  
  // Start the game
  flipCoinGame();
//PROBLEM 4
  
  
