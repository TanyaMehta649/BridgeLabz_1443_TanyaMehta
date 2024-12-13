// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function union(arr1) {
    let sets = new Set();
    for (let i = 0; i < arr1.length; i++) {
        sets.add(arr1[i]);
    }
    
    
    return Array.from(sets);
}

let arr1 = [1, 2, 3, 4, 5, 5, 6];
console.log(union(arr1));  