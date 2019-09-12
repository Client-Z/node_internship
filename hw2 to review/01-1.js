// ES5 Function Constructor
function Person(name) {
	this.name = name;
}

function Student(name, studentId) {
	Person.call(this, name);
	this.studentId = studentId;
}
// Using Object.create to manually set Student's "parent".
Student.prototype = Object.create(Person.prototype);

Student.prototype.show = function() {
	return `${this.studentId}: ${this.name}`;
}

const student = new Student('Sendy', 432);

console.log(student.show()); // `studentId: name`