// Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1;
    }
   return fibonacci(n-1)+fibonacci(n-2);
}
let n=10;
console.log(fibonacci(n));