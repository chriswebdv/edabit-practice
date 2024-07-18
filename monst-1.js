let first = 1;
let second = 2;
let third = 5;
let fourth = 7;
let fifth = 8;

let sum = first + second + third + fourth + fifth;

second = 3;

console.log(sum);

// arrow functions

const writeLog = () => {
  console.log("Hello");
  console.log("JavaScript");
  console.log("web");
};

writeLog();

// arrow functions with parameter

const sayNum = (num) => {
  console.log("This is", num);
};

sayNum(23);
sayNum(45);
sayNum(56);

// Create arrow function that returns the sum of two numbers

const sumTwoNums = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const result = sumTwoNums(10, 77);

console.log(result);
