//Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
function leftpartonly(arr1,arr2){
    let result=[];
    for(let num of arr1){
        if(!arr2.includes(num)){
            result.push(num);
        }
    }
return result;
}
let arr1=[1,2,3,4,5];
let arr2=[4,5,6,7,8];
console.log(leftpartonly(arr1,arr2));