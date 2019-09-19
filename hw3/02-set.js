/* Sets */

function MySet() {
  // collection will hold the set
  let collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = (el) => collection.includes(el);

  // this method will return all the values in the set
  this.values = () => collection;

	this.isValid = (val) => val === undefined || Number.isNaN(val) || val === null ? false : true;
  // this method will add an element to the set
  this.add = (el) => {
		!this.has(el) && this.isValid(el) ? collection.push(el) : console.error(`The set already has ${el} element!`);
	};	

  // this method will remove an element from a set
  this.remove = (el) => {
		const index = collection.indexOf(el);
		this.has(el) ? collection.splice(index, 1) : console.error(`The ${el} element was not found in the set!`);
	};

  // this method will return the size of the collection
  this.size = () => collection.length;

  // this method will return the union of two sets
  this.union = (otherSet) => {
		let newCollection = new MySet();
		collection.forEach(el => newCollection.add(el));
		otherSet.values().forEach(el => newCollection.has(el) ? false : newCollection.add(el));
		return newCollection.values();
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = (otherSet) => {
		let newCollection = new MySet();
		collection.forEach(el => otherSet.has(el) ? newCollection.add(el) : false);
		return newCollection;
	};

  // this method will return the difference of two sets as a new set
  this.difference = (otherSet) => {
		let newCollection = new MySet();
		collection.forEach(el => !otherSet.has(el) ? newCollection.add(el) : false);
		return newCollection;
	};

	// this method will test if the set is a subset of a different set
	// in general it has O(n) complexity
	// also I could add object comparing based on homework 1, but I think it would be overkill for this one
	// or maybe just JSON.stringify(obj1) === JSON.stringify(obj2) 
	this.subset = (otherSet) => {
		const lengthOfOtherSet = otherSet.size();
		const lengthOfCurrentSet = this.size();
		let comparisonIdx = null;
		// current set can be subset of another set only if it is shorter
		if(lengthOfCurrentSet < lengthOfOtherSet) {
			const otherSetValues = otherSet.values();
			for(let i = 0; i <= lengthOfOtherSet; i++) {
				// if the comparing is not proceed
				if(comparisonIdx === null) {
					if(collection[0] === otherSetValues[i]) comparisonIdx = 0;
				} else {
					// if comparing is proceed
					if(comparisonIdx === (lengthOfCurrentSet - 1)) return true; // if the current set ends
					collection[comparisonIdx + 1] === otherSetValues[i] ? comparisonIdx++ : comparisonIdx = null;
				}
			}
			return false;
		} else {
			return false;
		}
	};
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setA.add("d");
console.log(`setA has 'a' - ${setA.has("a")}`); // setA has 'a' - true

setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(`setB - ${setB.values()}`); // setB - b,c,a,d
console.log(`setB size = ${setB.size()}`); // setB size = 4
setB.remove('c');
console.log(`setB - ${setB.values()}`); // setB - b,a,d
console.log('A: '+setA.values()); // setA - a,d
console.log(`new set: ${setB.union(setA)}`); // new set: b,a,d
console.log(`setA is a subset of setB: ${setA.subset(setB)}`); // true
console.log(`Intersection: ${setA.intersection(setB).values()}`); // [ 'a', 'd' ]
console.log(`Difference: ${setB.difference(setA).values()}`); // [ 'b']
console.log('A: ', setA.values());
console.log('B: ', setB.values());