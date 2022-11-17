class Person {
	constructor(name) {
		this._name = name
	}

	set name(val) {
		console.log('设置name')
		this._name = val
	}

	get name() {
		console.log('读取name')
		return this._name
	}
}

const person = new Person('hjx')
console.log(person)
person.name = 'cp'
console.log(person.name)

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	get position() {
		return {
			x: this.x,
			y: this.y
		}
	}

	get area() {
		return this.width * this.height
	}
}

const rectangle = new Rectangle(1, 3, 5, 7)

console.log(rectangle)
console.log(rectangle.area)
console.log(rectangle.position)

