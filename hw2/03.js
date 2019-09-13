// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

/* 
	store zeros in the array and put units at the corresponding ranges in the array
 	at the output, generate arrays of two values [the position from which the units begin, the position of the last unit of the segment]
	minus the approach is that when working with large numbers arrays of the corresponding size will be created

	I have the other way of implementation via "sets", look to down below.
*/

// class RangeList {
	/**
	 * Adds a range to the list
	 * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
	 */
	// constructor() {
	// 	this.rangeList = [];
	// }
	
	// add(range) {
	// 	for(let i = range[0]; i < range[1]; i++)
	// 		if(!this.rangeList[i]) this.rangeList[i] = 1;
	// }
	/**
	 * Removes a range from the list
	 * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
	 */
	// remove(range) {
	// 	for(let i = range[0]; i < range[1]; i++)
	// 		if(this.rangeList[i]) this.rangeList[i] = 0;
	// }

  /**
   * Prints out the list of ranges in the range list
   */
	// print() {
	// 	let arrOfRanges = [];
	// 	let inSomeRange = false;
	// 	for(let i = 0; i < this.rangeList.length; i++) {
	// 		if(this.rangeList[i] && !inSomeRange) {
	// 			arrOfRanges.push(i);
	// 			inSomeRange = true;
	// 		} else if(this.rangeList[i] && inSomeRange && i === this.rangeList.length-1) {
	// 			arrOfRanges.push(i+1);
	// 		} else if(!this.rangeList[i] && inSomeRange) {
	// 			inSomeRange = false;
	// 			arrOfRanges.push(i);
	// 		}
	// 	}
	// 	let outPutStr = '';
	// 	for(let i = 0; i < arrOfRanges.length; i++) {
	// 		if(i === 0) {
	// 			outPutStr += `[${arrOfRanges[i]}, `;
	// 		} else if(i%2 !== 0) {
	// 			outPutStr += `${arrOfRanges[i]}) `;
	// 		} else {
	// 			outPutStr += ` [${arrOfRanges[i]}, `;
	// 		}
	// 	}
	// 	console.log(outPutStr);
	// }
// }

// !!! This is the second and more memory friendly version :)
class RangeList {

	constructor(range) {
		this.rangeList = new Set();
	}
	  
	add(range) {
		for(let i = range[0]; i < range[1]; i++) this.rangeList.add(i);
		let tempArr = Array.from(this.rangeList);
		tempArr.sort((a, b) => a - b);
		this.rangeList = new Set(tempArr);
	}

	remove(range) {
		for(let i = range[0]; i < range[1]; i++) this.rangeList.delete(i);
	}

	print() {
		let tempArr = Array.from(this.rangeList);
		let outPutStr = '';
		for(let i = 0; i < tempArr.length; i++) {
			if(i === 0) {
				outPutStr += `[${tempArr[i]}, `;
			} else if(tempArr[i] !== tempArr[i-1] + 1) {
				outPutStr += `${tempArr[i-1] + 1}) [${tempArr[i]}, `;
			} else if(i === tempArr.length - 1) {
				outPutStr += `${tempArr[i] + 1})`
			}
		}
		console.log(outPutStr);
	}
}

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)