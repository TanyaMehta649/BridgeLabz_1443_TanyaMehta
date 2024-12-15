//1 length property
let courses=["html","css","java"];
console.log(courses.length)
//this will return the length of the array
//2 toString
//this will convert array to String
let arr=["my","name","is","tanya"];
let ans=arr.toString();
console.log(ans);
//3 join - it concatenates the entire string eg if we want to add , or | it will be added after every element
let states=["haryana","punjab","bengal","gujarat"];
console.log(states.join('|'));
//4 delete - it deletes the given thing it maybe obj array or anything
let emp={
    firstname:"rani",
    lastname:"ranjha",
    age:22


}
console.log(delete emp.age);
console.log(emp)
//5 conact - it adds 2 or more arrayys and gives us the merged arrays
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let finalarr=arr1.concat(arr2);
console.log(finalarr);