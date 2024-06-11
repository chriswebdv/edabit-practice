let a;
let b;

function lessThan100(a, b) {
  let sum = a + b;
  if (sum > 100) {
    return false;
  } else if (sum <= 100) {
    return true;
  }
}
console.log(lessThan100(3, 77));
