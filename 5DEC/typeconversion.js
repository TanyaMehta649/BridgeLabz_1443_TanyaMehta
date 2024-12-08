Number("3.14");
//it converts into a no
Number(Math.PI);
//3.1415926535....
Nummber(" ");
Number("");
//both will return 0
Number("99 88")
Number("John");
//while these both will return NaN
//e1 - string+number
//"hello"+5-> "hello"+"5"="hello5";
//when a string and no is added resultant will also be string
//but in case of * / - they donot perform string concatenation
console.log("5"-2); //3
console.log("5"*2); //10
console.log("hello"-2); //Nan

//if both will be numbers addition will be performed
//when a boolean value is used in an arithmetic operation js implictly converts it into a no
//true becomes 1 and false becomes 0
true+2
//ans will be 3
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); // false
//convert any value to a string
let num=42;
console.log(String(num))
//"42" is printed
console.log(Number("123abc"))
//NaN is printed
//parseInt - extracts int from string
console.log(parseInt("123.45"))
//123
//parseFloat - extracts float from string
console.log(parseFloat("123.45"))
//123.45
