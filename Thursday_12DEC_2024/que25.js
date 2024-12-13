//Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function question(arr1,arr2){
    let result=[];
    for(let num of arr1){
        if(!arr2.includes(num)){
            result.push(num);
        }
    }
    for(let num of arr2){
        if(!arr1.includes(num)){
            result.push(num);
        }
    }
    return result;

}
let arr1=[1,2,3,4,5,6];
let arr2=[5,6,7,8,9,10];
console.log(question(arr1,arr2));
