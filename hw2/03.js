// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

// хранить в массиве нули и при входящих диапазонах на соответствующие позиции в массиве ставить единицы
// при выводе генерить массивы из двух значений [позиция с которой начинаются единицы, позиция последней единицы отрезка]
// минус подхода в том что при работе с большими числами будут созданы соответствующего размера массивы

class RangeList {
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
	constructor(range) {
		this.rangeList = [];
	}
	
	add(range) {
		// TODO: implement this
		const start = range[0];
		const finish = range[1];
		for(let i = start; i < finish; i++) {
			if(!this.rangeList[i]) this.rangeList[i] = 1;
		}
	}

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
	remove(range) {
		// TODO: implement this
	}

  /**
   * Prints out the list of ranges in the range list
   */
	print() {
		let arrOfRanges = [];
		let inSomeRange = false;
		for(let i = 0; i < this.rangeList.length; i++) {
			if(this.rangeList[i] && !inSomeRange) {
				arrOfRanges.push(i);
				inSomeRange = true;
			} else if(this.rangeList[i] && inSomeRange && i === this.rangeList.length-1) {
				arrOfRanges.push(i+1);
			} else if(!this.rangeList[i] && inSomeRange) {
				inSomeRange = false;
				arrOfRanges.push(i);
			}
		}
		console.log(arrOfRanges);
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
// // Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// // Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// // Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// // Should display: [1, 8) [10, 21)

// rl.remove([10, 10]);
// rl.print();
// // Should display: [1, 8) [10, 21)

// rl.remove([10, 11]);
// rl.print();
// // Should display: [1, 8) [11, 21)

// rl.remove([15, 17]);
// rl.print();
// // Should display: [1, 8) [11, 15) [17, 21)

// rl.remove([3, 19]);
// rl.print();
// Should display: [1, 3) [19, 21)