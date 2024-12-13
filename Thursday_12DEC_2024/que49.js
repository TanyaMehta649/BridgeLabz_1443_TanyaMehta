//Shuffle an array of strings
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; 
    }
    return arr;
}

const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledArray = shuffleArray(stringArray);
console.log(shuffledArray);