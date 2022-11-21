class Person {

	height = 1.88
	#info = {name: 'hjx', age: 24}

	static total = 100

	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

const p = new Person('hjx',26)
console.log(p)