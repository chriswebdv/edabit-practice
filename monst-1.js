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

// Create arrow function that returns the sum of five numbers

const sumOfFiveNums = (num1, num2, num3, num4, num5) => {
  return num1 + num2 + num3 + num4 + num5;
};

const finalResult = sumOfFiveNums(1, 2, 3, 4, 5);

console.log(finalResult);

// if else task

// turn the if else to a function

const getAgeMessage = (age) => {
  if (age < 20) {
    console.log("young!");
  } else if (age > 80) {
    console.log("old!");
  } else {
    console.log("grown up!");
  }
};

getAgeMessage(7);

// ternary operator

const userName = "jack";

const resultUser =
  userName === "jack" || userName === "john" ? "admin" : "user";

console.log(resultUser);

// user object function

const user = {
  name: "Haro",
  role: "General",
  age: 47,
};

const userRoleCheck = (user) => {
  if (user.role === "admin") {
    console.log("Give access!");
  }
};

userRoleCheck(user.role);
