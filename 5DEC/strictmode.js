// Jab aap "use strict"; ka use karte ho, toh JavaScript Strict Mode ko enable kar deta hai. Is mode mein code strict rules ke according execute hota hai, jo bugs ko detect karne aur better coding practices follow karne mein help karta hai.
"use strict"
x=10;
//yaha error aaega kyunki hum variable ko declare kiye bina use kar rahe hain
function add(a,a){
    //duplicate paramter are not allowed
}
let num=010;
//octal literals not allowed(0 se start hone wale)
let a=10;
delete a;
//error cant delete variable
const obj={
key:1,
key:2,
//ek hi obj ke andr same key  do baar define krna b mna hai 
};
let static=1;
//reserved keywords ko nahi rakh skte hum as a var name


