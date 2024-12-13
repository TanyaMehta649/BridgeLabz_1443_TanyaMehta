//Rotate an array to the right 1 position
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
let ans = [];

for (let i = 0; i < n - 1; i++) {
    ans[i + 1] = arr[i]; 
}
ans[0] = arr[n - 1]; 

for (let i = 0; i < n; i++) {
    console.log(ans[i]);
}
