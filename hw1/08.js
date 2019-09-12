// create function which will return the sum of two numbers

function sum (a, b) {
  a = isNaN(+a) ? 0 : +a;
  b = isNaN(+b) ? 0 : +b;
  return a + b;
}

// console.log(sum([21], 2));
// console.log(sum('10', {}));
console.log(sum('10.1', 5.2));
console.log(sum(null, NaN));