//Calculate the sum of even numbers greater than 10 and less than 30
let sum=0;
for(let i=12;i<30;i++){
    //ensure that loop should be start from 12 as it is next greater even no after 10
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);
