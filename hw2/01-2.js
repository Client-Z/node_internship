// ES6 Class
class Person {
	constructor(name) {
		this.name = name;
	}
}

class Student extends Person {
	constructor(name, studentId) {
		super(name);
		this.studentId = studentId;
	}
	show() {
		return `${this.studentId}: ${this.name}`;
	}
}

const student = new Student('Demian', 234);

console.log(student.show()); // `studentId: name`