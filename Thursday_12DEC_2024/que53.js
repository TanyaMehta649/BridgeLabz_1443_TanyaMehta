//53. Calculate 70! with high precision (all digits)
function findfactorial(n){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return n*findfactorial(n-1);
}
console.log(findfactorial(70));