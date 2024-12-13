//Reverse an array
//BRUTE FORCE
let numbers = [1, 2, 3, 4, 5, 6];
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); 
//OPTIMAL
let number = [1, 2, 3, 4, 5, 6];
let reversedNumber = [];

for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber.push(number[i]); 
}

console.log(reversedNumber); 
