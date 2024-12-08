// Iterating is easy to understand.

// It simply means looping over a sequence of elements.

// Here are some easy examples:

// Iterating over a String
// Iterating over an Array
const username="w3schools";
let txt="";
for(const x of username){
    txt+=x;
}
console.log(txt);
const arr=[10,20,30];
for(const value of arr){
    console.log(value);
}
const newarr=[...arr];
console.log(newarr);
//we can also iterate using spread operator
const ans=new Set(["a","b","c","d"]);
let sol="";
for(const x of ans){
    sol+=ans;
}
