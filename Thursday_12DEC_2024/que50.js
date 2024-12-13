// Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function generateUniqueRandomNumbers(n) {
    const randomNumbers = [];

    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = n - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }

    return numbers;
}

const n = 5;
const result = generateUniqueRandomNumbers(n);
console.log(result); 