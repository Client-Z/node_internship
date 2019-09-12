// **ES5**
const Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName  = lastName;
	this.namesHistory = [];
	this.namesHistory.push(firstName);
};

Person.prototype.showName = function() {
	return `${this.firstName} ${this.lastName}`;
}
Person.prototype.changeName = function(newName) {
	this.firstName = newName;
	this.namesHistory.push(newName);
}

const Employee = function(firstName, lastName, position) {
	Person.call(this, firstName, lastName);
	this.position = position;
	this.positionsHistory = [];
	this.positionsHistory.push(position);
};

// Using Object.create to manually set Employee's "parent".
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.showNameAndPosition = function() {
	return `${this.firstName} ${this.lastName}: ${this.position}`;
}
Employee.prototype.changePosition = function(newPosition) {
	this.position = newPosition;
	this.positionsHistory.push(newPosition);
}
Employee.prototype.showHistory = function() {
	return { 'namesHistory': this.namesHistory, 'positionsHistory': this.positionsHistory };
}
// result
const employee = new Employee('Bruce', 'Wayne', 'Superhero');

console.log(employee.showName()); // `firstName lastName`
console.log(employee.showNameAndPosition()); // `firstName lastName: position`

// TODO changeName // TODO changePosition
employee.changeName('Kid');
employee.changePosition('student');
console.log(employee.showNameAndPosition());
// TODO show the history of changes of employee (name and position)
console.log(employee.showHistory());