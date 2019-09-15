// **ES5**
const Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName  = lastName;	
};

Person.prototype.showName = function() {
	return `${this.firstName} ${this.lastName}`;
}

const Employee = function(firstName, lastName, position) {
	Person.call(this, firstName, lastName);
	this.position = position;
	this.namesHistory = [];
	this.positionsHistory = [];
	this.namesHistory.push(firstName);
	this.positionsHistory.push(position);
	this.creationDate = new Date().toLocaleDateString();
	this.id = `i${(+new Date).toString(8)}`;
};

// Using Object.create to manually set Employee's "parent".
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.showNameAndPosition = function() {
	return `id: ${this.id}, date of creation: ${this.creationDate};\n ${this.firstName} ${this.lastName}: ${this.position}\n`;
}
Employee.prototype.showHistory = function() {
	return { 'namesHistory': this.namesHistory, 'positionsHistory': this.positionsHistory };
}
Person.prototype.changeName = function(newName) {
	this.firstName = newName;
	this.namesHistory.push(newName);
}
Employee.prototype.changePosition = function(newPosition) {
	this.position = newPosition;
	this.positionsHistory.push(newPosition);
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