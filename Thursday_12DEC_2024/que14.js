//Print the first 10 Fibonacci numbers without recursion
function printfibonacci(n){
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib.push(fib(n-1)+fib(n-2));
    }
    console.log(fib.slice(0,n));
}
printfibonacci(10);