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
  role: "other",
  age: 47,
};

const userRoleCheck = (user) => {
  if (user.role === "admin") {
    console.log("Give access!");
  }
};

userRoleCheck(user);

// create an array of objects and add one more item to the array

const postsWithCount = [
  { title: "hello", likes: 8 },
  { title: "bye", likes: 5 },
  { title: "lol", likes: 10 },
  { title: "sure", likes: 7 },
];

postsWithCount.push({ title: "word", likes: 14 });

console.log(postsWithCount);

// create a user function

const assignRole = (nameOfUser) => {
  if (nameOfUser === "Haro") {
    return "admin";
  } else {
    throw new Error("not correct user!");
  }
};

const roleResult = assignRole("Haro");
console.log(roleResult);

// use for loop to populate an empty array

const numsArr = [];

for (let i = 0; i < 10; i++) {
  numsArr.push({ id: i, name: "hello_" + i });
}

console.log(numsArr);

console.log("-----------------------------------");
// create while loop and iterate over it and add object inside empty array
const userArr = [];
let i = 0;

while (i < 10) {
  userArr.push({
    id: i,
    name: "hello_" + i,
  });
  i += 3;
}

console.log(userArr);

console.log("-----------------------------------");

// Create an Array of users
// Create and array of strings with the following: Hello jack with age 30

usersGroup = [
  { id: 4001, name: "Goyo", age: 35 },
  { id: 4002, name: "Tanko", age: 45 },
  { id: 4003, name: "Rich", age: 55 },
  { id: 4004, name: "Gator", age: 25 },
];

console.log(usersGroup);

const userStrings = usersGroup.map((user) => {
  return `hello ${user.name} with age ${user.age}`;
});

console.log(userStrings);

// array of users with id, name and age
// create a functions that gets the users that are older than 30
