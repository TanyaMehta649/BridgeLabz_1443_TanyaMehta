//Print the first 100 prime numbers
function isPrime(n) {
    if (n === 0 || n === 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let result = [];
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        result.push(i);
    }
}

console.log(result.join(' '));
