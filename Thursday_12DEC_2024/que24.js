//Create a function that will merge two arrays and return the result as a new array
function mergedarrays(arr1,arr2){
    let ans=[...arr1,...arr2];
    return ans;

}
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
console.log(mergedarrays(arr1,arr2));
