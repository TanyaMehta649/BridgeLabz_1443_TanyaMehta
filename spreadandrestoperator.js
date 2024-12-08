//spread operator -used to spread elements of an array , obj
const numbers=[1,2,3];
//ek array ke elements ko dusre array m dalna
const newnumbers=[...numbers,4,5];
console.log(newnumbers);
//in object
const person={
    name:"tanya",
    age:22

};
const updated={...person,city:"karnal"};
console.log(updated);
//in function arguements
function sum(a,b,c){
    return a+b+c;
}
const nums=[1,2,3];
console.log(sum(...nums));
//REST OPERATORS-
//it is used to collect multiple elements and store them into a single array
const[first,second,...rest]=[1,2,3,4,5];
console.log(first);
console.log(second);
console.log(third);