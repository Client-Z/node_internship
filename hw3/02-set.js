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
  this.size = ()  => collection.length;

  // this method will return the union of two sets
  this.union = (otherSet) => collection = [...collection, ...otherSet];

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
	this.subset = (otherSet) => {
		const lengthOfOtherSet = otherSet.size();
		let inComparing = false;
		let wasCompared = false;
		if(this.size() < lengthOfOtherSet) {
			for(let i = 0; i < lengthOfOtherSet; i++) {
				// logic
			}
		} else {
			return false;
		}
	};
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
console.log(setA.has("a"));
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setB.values());
console.log(setB.size());
// setB.remove('a');
console.log(setB.values());
console.log(setB.union([1,2,3]));
console.log(setB.values());
console.log(setA.subset(setB)); // true
console.log(setA.intersection(setB).values()); // [ 'a' ]
console.log(setB.difference(setA).values()); // [ 'b', 'c', 'd' ]