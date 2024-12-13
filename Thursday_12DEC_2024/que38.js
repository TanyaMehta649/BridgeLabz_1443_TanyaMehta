//Create a function that will convert an array containing ASCII codes in a string
function asciiArrayToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
const arr=[72,101,108,108,111,33];
const ans=asciiArrayToString(arr);
console.log(ans);