// The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.
//... is the rest parameter (triple dots)
function functionname(...parameters)
{
statement;
}
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
