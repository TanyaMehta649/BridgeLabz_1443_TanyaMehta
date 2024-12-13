//Rotate an array to the left 1 position
let arr=[1,2,3,4,5,6];
let ans=[];
let n=arr.length;
for(let i=0;i<arr.length;i++){
ans[i-1]=arr[i];
}
ans[n-1]=arr[0];
for(let i=0;i<ans.length;i++){
    console.log(ans[i]);
}