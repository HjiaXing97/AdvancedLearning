class Person {
	constructor(age) {
		this.age = age
	}

	/**
	 * 类的实例方法，只能被类创建的实例调用
	 */
	running() {}
	eating() {}

	/**
	 * 类的静态方法 可以被类直接调用
	 * @returns {Person}
	 */
	static randomPerson() {
		const randomAge = Math.floor(Math.random() * 100)
		return new Person(randomAge)
	}
}

const p1 = Person.randomPerson()
console.log(p1)
