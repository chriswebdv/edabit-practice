let firstName = "Tanko";
let lastName = " Rice";
let fullName = firstName + lastName;

console.log(fullName);

let personName = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called

let hiThere = () => {
  greet = greeting + ", " + personName + "!";
  console.log(greet);
};

hiThere();

let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
  return (myPoints += 3);
}

function remove1Point() {
  return (myPoints -= 1);
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints);

// Try to predict what each of the lines will log out
console.log("2" + 2); // "22"
console.log(11 + 7); // 18
console.log(6 + "5"); // "65"
console.log("My points: " + 5 + 9); // "59"
console.log(2 + 2); // 4
console.log("11" + "14"); // "1114"
