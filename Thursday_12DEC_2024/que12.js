//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function filternumbers(numbers){
    return numbers.filter(num=>num>0);
}
let numbers=[-1,2,3,-4,-5,99];
let ans=filternumbers(numbers);
console.log(ans);