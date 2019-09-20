/* Stacks */

function Stack() {
  this.storage = {};
	this.count = 0;

	this.isValid = (val) => val === undefined || Number.isNaN(val) || val === null ? false : true;
  // Adds a value onto the end of the stack
  this.push = (value) => {
		if(this.isValid(value)) {
			this.storage[this.count] = value;
			this.count++;
		} else {
			console.error(`You can't add any indefinite value! It must be some object or primitive.`);
		}
	};
  // Removes and returns the value at the end of the stack
	this.pop = () => {
		if(this.count) {
			this.count--;
			let item = this.storage[this.count];
			delete this.storage[this.count];
			return item;
		} else {
			console.error(`The stack is empty`);
		}
	}
	// Returns the size of the stack
  this.size = () => this.count;
  // Returns the value at the end of the stack
	this.peek = () => this.storage[this.count - 1];
}

const myStack = new Stack();

myStack.push(null);

myStack.push(1);
myStack.push(2);
myStack.push(function func() { return 1; });
myStack.push(new Date());

console.log(myStack.peek()); // some date
console.log(myStack.pop()); // some date
console.log(myStack.peek()); // func

myStack.push("node.js");
console.log(myStack.size()); // 4
console.log(myStack.peek()); // node.js
console.log(myStack.pop()); // node.js
console.log(myStack.peek()); // func