// ES6 Class
class Person {
	constructor(name) {
		this.name = name;
		this.id = `i${(+new Date).toString(16)}`;
	}
}

class Student extends Person {
	constructor(name, studentId) {
		super(name);
		this.studentId = studentId ? studentId : this.id;
	}
	show() {
		return `${this.studentId}: ${this.name}`;
	}
}

const student = new Student('Demian');
const student1 = new Student('Alana', 234);

console.log(student.show()); // `studentId: name`
console.log(student1.show());