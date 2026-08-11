const numbers =[12,13,14,15,16,17,18,19,20];
let sum = 0;
console.log("Array elements:");

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

    sum = sum + numbers[i]; 
}
const average = sum / numbers.length;
console.log("Sum:", sum);
console.log("Average:", average);
