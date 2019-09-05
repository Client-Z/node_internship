// create function which will return the sum of two numbers

function sum (a, b) {
  // if we have at least one array of numbers
  if(Array.isArray(a)) {
    let aSum = 0;
    a.forEach(e => aSum += e);
    a = aSum;
  }
  if(Array.isArray(b)) {
    let bSum = 0;
    b.forEach(e => bSum += e);
    b = bSum;
  }
  // for all other cases
  a = isNaN(+a) ? 0 : +a;
  b = isNaN(+b) ? 0 : +b;
  return a + b;
}

console.log(sum([21, 10], [2, 3, 'e']));
console.log(sum('10', {}));
console.log(sum('10', 5));