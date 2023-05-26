// let firstNumber = 15;
// let secondNumber = 17;

// let temp = firstNumber;
// firstNumber = secondNumber;
// secondNumber = temp;

// console.log("firstNumber =", firstNumber);
// console.log("secondNumber =", secondNumber);

// let firstNumber = 15;
// let secondNumber = 17;

// firstNumber = firstNumber + secondNumber;
// secondNumber = firstNumber - secondNumber;
// firstNumber = firstNumber - secondNumber;

// console.log("firstNumber =", firstNumber);
// console.log("secondNumber =", secondNumber);

let firstNumber = 15;
let secondNumber = 17;

[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log("firstNumber =", firstNumber);
console.log("secondNumber =", secondNumber);