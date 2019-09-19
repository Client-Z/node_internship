// create a function which returns all possible combinations from the phone digits
const phoneDigits = {
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m', 'n', 'o'],
	'7': ['p', 'q', 'r', 's'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z'],
};
// The solution is slow ~ O(N^3), but it works :)
// Although, I think here is minimum possible number of cycles
const letterCombinations = (digits) => {
	const combine = (a, b) => {
		const resultArr = [];
		a.forEach(el => b.forEach(item => resultArr.push(el + item)));
		return resultArr;
	}
	let result = [];
	for(let i = 0; i < digits.length - 1; i++) {
		if(i === 0) {
			result = combine(phoneDigits[digits[i]], phoneDigits[digits[i+1]])
		} else {
			result = combine(result, phoneDigits[digits[i+1]])
		}	
	}
	return result;
};

console.log(letterCombinations('23')); // [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
console.log(letterCombinations('234')); 
/* 
[ 'adg','adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 
  'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi' ]
*/