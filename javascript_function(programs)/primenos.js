console.log("Program Started");
for (let num = 2; num <= 100; num++) {
    let prime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}