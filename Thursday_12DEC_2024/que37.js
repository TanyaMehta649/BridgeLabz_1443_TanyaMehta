// Create a function that will convert a string in an array containing the ASCII codes of each character
function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt());
}


const ip = "Tanya Mehta";
const op = stringToAsciiArray(ip);
console.log(asciiArray);