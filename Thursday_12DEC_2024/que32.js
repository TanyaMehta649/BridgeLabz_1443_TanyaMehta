//Create a function that will capitalize the first letter of each word in a text
//input- my name is tanya
//output-My Name Is Tanya
function capitalizeWords(input) {

    let words = input.split(" ");

    let result = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" "); 

    return result;
}

let input = "welcome to geeksforgeeks";
let result = capitalizeWords(input);
console.log("Input: " + input);
console.log("Output: " + result);
