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
		this.namesHistory = [];
		this.positionsHistory = [];
		this.namesHistory.push(firstName);
		this.positionsHistory.push(position);
		this.id = `e${(+new Date).toString(16)}`;
	}
	changeName(newName) {
		this.firstName = newName;
		this.namesHistory.push(newName);
	}
	changePosition(newPosition) {
		this.position = newPosition;
		this.positionsHistory.push(newPosition);
	}
	showNameAndPosition() {
		return `${this.id}: ${this.firstName} ${this.lastName} - ${this.position}`;
	}
	showHistory() {
		return { 'namesHistory': this.namesHistory, 'positionsHistory': this.positionsHistory };
	}
}

// result
const employee = new Employee('Clark', 'Kent', 'journalist');

console.log(employee.showName()); // `firstName lastName`
console.log(employee.showNameAndPosition()); // `firstName lastName: position`

employee.changeName('Barry');
employee.changePosition('Driver');
console.log(employee.showNameAndPosition());
console.log(employee.showHistory());
