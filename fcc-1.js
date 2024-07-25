// reviewing the first excercise set of Free Code Camp Curriculum
let character = "Hello";
console.log(character);

character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

let profession;
let age;

profession = "teacher";

console.log(profession);
console.log(age);

// use variables with numbers

let count = 8;
console.log(count + 1);

// working with arrays

let rows = ["Naomi", "Quincy", "CamperChan"];

// use push to add string the array
let pushed = rows.push("freeCodeCamp");
console.log("pushed", pushed);

console.log(rows[0]);
console.log(rows);

rows[rows.length - 1] = 10;

console.log(rows);

let popped = rows.pop();
console.log("this is", popped);

// cities array

let cities = ["London", "New York", "Mumbai"];

console.log(cities);

cities[cities.length - 1] = "Mexico City";
console.log(cities);

// Pyramid Generator
const pyramidChar = "#";
const pyramidCount = 8;
const pyramidRows = [];

for (let i = 0; i < pyramidCount; i++) {
  pyramidRows.push(pyramidChar.repeat(i));
}

let result = "";

for (const row of pyramidRows) {
  result = result + "\n" + row;
}

console.log(result);
