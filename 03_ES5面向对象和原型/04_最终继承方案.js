function inherit(SubType, SuperType) {
	SubType.prototype = Object.create(SuperType.prototype);
	Object.defineProperty(SubType.prototype, "constructor", {
		enumerable: false,
		configurable: true,
		writable: true,
		value: SubType,
	});
}

function Person(name, age) {
	this.name = name;
	this.age = age;
}

function Student(name, age, sNo) {
	Person.call(this, name, age);
	this.sNo = sNo;
}

Person.prototype.running = function () {
	console.log(`${this.name} is running`);
};

inherit(Student, Person);

Student.prototype.studding = function () {
	console.log(`${this.name} is studding`);
};

const stu1 = new Student("黄嘉兴", 25, 100001);

console.log(stu1);
stu1.running()
stu1.studding()