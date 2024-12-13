//Calculate the sum of digits of a positive integer number
let sum=0;
let n=1234;
while(n>0){
    let ld=n%10;
    sum+=ld;
    n=Math.floor(n/10);
}
console.log(sum);