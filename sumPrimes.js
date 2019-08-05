// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself.
// For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

//2,3,5,7,11,13,17,19,23,29

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && n !== i) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    let sum = 0;
    let i = 2;
    while (i <= num) {
        if (isPrime(i)) {
            sum += i;
        }
        i++;
    }
    return sum
}

console.log(sumPrimes(977));
