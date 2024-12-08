//recursion is a technique where a function calls itself to solve smaller instances of same  problem like factorial , fibonacci and tree traversal etc. 
//base case- condn where recursion stops
//recursive case- the part where the fn calls itself
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);

}
console.log(fibonacci(6));
//stack is  a ds used by js to manage function calls and it works on lifo meaning the last function called is the first to complete
//how recursion is related to stack
//when a function is called it is pushed on stack and once base condn is met its popped off the stack
