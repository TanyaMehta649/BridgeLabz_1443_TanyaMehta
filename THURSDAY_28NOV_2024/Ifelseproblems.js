//PROBLEM 1- Write a program that reads 5 Random 3 Digit values and then outputs the minimum 
//and the maximum value
let values=[];
for(let i=0;i<5;i++){
    values.push(Math.floor(Math.random*900)+100);
}
//this will generate no between 100 to 999
let min=values[0];
let max=values[0];
//we will assume our first value as minimum and maximum value
for(let i=0;i<values.length;i++){
    if(values[i]<min){
        min=values[i];
    }
    else if(values[i]>max){
        max=values[i];
    }
}
console.log(min);
console.log(max);
//PROBLEM 2 - Write a program that takes day and month from the command line and prints true if 
// day of month is between March 20 and June 20, false otherwise.
//PROBLEM 3- Write a program that takes a year as input and outputs the Year is a Leap Year or not 
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless  divisible by 400.
const year=2024;
if(year.toString().length!==4){
    console.log("not a valid input");
}
else{
    if((year%4===0 && year%100!==0) || year%400===0){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}
//PROBLEM 4
// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
const flip = Math.random();
 // Generates a random number between 0 and 1

if (flip < 0.5) {
    console.log("Heads");
} else {
    console.log("Tails");
}
//PROBLEM 5
//Read a single digit number and write the number in word
const number=3;
if(number===0){
console.log("Zero");
}
else if(number===1){
    console.log("One");
}
else if(number===2){
    console.log("Two");
}
else if(number===3){
    console.log("Three");
    }
else if(number===4){
        console.log("Four");
        }
else if(number===5){
    console.log("Five");
    }
else if(number===6){
    console.log("Six");
}
else if(number===7){
console.log("Seven");
}
else if(number===8){
 console.log("Eight");
}
else if(number===9){
console.log("Nine");
}
else{
    console.log("Invalid input");
}
//PROBLEM 6
// Read a Number and Display the week day (Sunday, Monday,…
const day=3;
if(day===1){
    console.log("Monday");
}
else if(day===2){
    console.log("Tuesday");
}
else if(day===3){
    console.log("Wednesday");
}
else if(day===4){
    console.log("Thursday");
}
else if(day===5){
    console.log("Friday");
}
else if(day===6){
    console.log("Saturday");
}
else if(day===3){
    console.log("Wednesday");
}
//PROBLEM 7
// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred
const numbers = 1000; // Replace this with the number you want to check (1, 10, 100, 1000, etc.)

if (numbers === 1) {
    console.log("Unit");
} else if (numbers === 10) {
    console.log("Ten");
} else if (numbers === 100) {
    console.log("Hundred");
} else if (numbers === 1000) {
    console.log("Thousand");
} else if (numbers === 10000) {
    console.log("Ten Thousand");
} else if (numbers === 100000) {
    console.log("Hundred Thousand");
} else if (numbers === 1000000) {
    console.log("Million");
} else {
    console.log("Invalid input. Please enter a valid power of 10 (1, 10, 100, 1000, etc.).");
}

//PROBLEM 8
// Enter 3 Numbers do following arithmetic operation and find the one that 
// is maximum and minimum
//  1.   a + b * c 
// 2.   a % b + c
//  3.    c + a / b
//  4.    a * b + c
const a=5;
const b=3;
const c=2;
const res1=a+b*c;
const res2=a%b+c;
const res3=c+a/b;
const res4=a*b+c;
const maxans=Math.max(res1,res2,res3,res4);
const minans=Math.min(res1,res2,res3,res4);
console.log(`Maximum result:${maxans}`);
console.log(`Minimum result:${minans}`);
