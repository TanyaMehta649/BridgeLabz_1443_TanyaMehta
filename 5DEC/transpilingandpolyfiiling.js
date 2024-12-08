//dono concepts ka main goal hai ki hmare code ko sbhi environments m properly run kiya ja sake chahe vo old browser ho ya new ho.
//A transpiler is a tool that converts code written in newer syntax into equivalent code that older environments can execute. This process is known as transpiling.
//Example:
// JavaScript ke naye features (jaise ES6/ES7 features) purane browsers (jo un features ko support nahi karte) mein kaise run kiye ja sake, iske liye transpiling hota hai.

// Babel ek popular tool hai jo ES6 ya uske baad ke code ko ES5 mein transpile karta hai, jo purane browsers support karte hain.
// ES6 Arrow Function
const sum = (a, b) => a + b;
console.log(sum(5, 10));  // 15
//ye newer code
//isko transpile krke aise aaega
// ES5 function expression
var sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 10));  // 15
//yaha babel ne arrow fn ko normal function m krdia h convert
//In JavaScript, polyfilling refers to providing functionality that is not natively available in older browsers or environments. A polyfill is a piece of code (usually JavaScript) that implements the missing functionality in environments that don't support it.