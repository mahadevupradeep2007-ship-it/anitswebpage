let n = 47;
let prime = true;

if (n <= 1) {
    prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
}

if (prime)
    console.log(n + " is Prime");
else
    console.log(n + " is Not Prime");