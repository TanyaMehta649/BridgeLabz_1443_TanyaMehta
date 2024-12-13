//Create a function that will return the number of words in a text
function returncount(text){
    let arr=text.split(" ");
 return arr.length;

}
let text="my name is tanya and i study in chitkara";
console.log(returncount(text));