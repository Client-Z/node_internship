/* Sets */

function MySet() {
  // collection will hold the set
  const collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function(element) {};

  // this method will return all the values in the set
  this.values = function() {};

  // this method will add an element to the set
  this.add = function(element) {};

  // this method will remove an element from a set
  this.remove = function(element) {};

  // this method will return the size of the collection
  this.size = function() {};

  // this method will return the union of two sets
  this.union = function(otherSet) {};

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {};

  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {};

  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {};
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB)); // true
console.log(setA.intersection(setB).values()); // [ 'a' ]
console.log(setB.difference(setA).values()); // [ 'b', 'c', 'd' ]