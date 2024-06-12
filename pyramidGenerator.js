const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1)); // adding # to the rows array
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

function padRow(name) {
  return name;
}

const call = padRow();
console.log(call);
