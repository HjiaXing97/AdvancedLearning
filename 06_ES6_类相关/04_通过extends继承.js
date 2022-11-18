class Person {
	constructor(name, age) {
		this.age = age
		this.name = name
	}

	running() {
		console.log(`${this.name} is running`)
	}

	eating() {
		console.log(`${this.name} is eating`)
	}
}

class Student extends Person {
	constructor(name, age, SNO) {
		/**
		 * 字类的数据传递给父类
		 */
		super(name, age);
		this.SNO = SNO
	}
}
//
// const student = new Student('hjx',24,100001)
// console.log(student)
