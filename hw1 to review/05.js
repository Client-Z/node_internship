// fix the function isBig to make check of numbers

// function isBig(thing) {
// 	thing = +thing
// 	if (thing === 0 || thing === 1 || thing === 2) {
// 	  return false
// 	}
// 	return true
// }

const isBig = (thing) => +thing > 2;

console.log(isBig(1));
console.log(isBig([2]));
console.log(isBig([3]));
console.log(isBig(undefined));
console.log(isBig(null));
console.log(isBig(NaN));
console.log(isBig(Infinity));