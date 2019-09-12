// ***ES2015+**
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	showName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class Employee extends Person {
	constructor(firstName, lastName, position) {
		super(firstName, lastName);
		this.position = position;
	}
	showNameAndPosition() {
		return `${this.firstName} ${this.lastName}: ${this.position}`;
	}
}

// result
const employee = new Employee('Clark', 'Kent', 'journalist');

console.log(employee.showName()); // `firstName lastName`
console.log(employee.showNameAndPosition()); // `firstName lastName: position`
