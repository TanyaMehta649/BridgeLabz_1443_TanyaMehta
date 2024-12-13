//Calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(str) {
    let numbers = str.split(',');
    let sum = numbers.reduce((acc, num) => acc + Number(num), 0);

    return sum;
}
let input = "1,2,3,4,5";
let result = sumOfNumbers(input);
console.log(result); // Output: 15
