const obj = {
	name: 'hjx',
	age: 24
}

const objProxy = new Proxy(obj, {
	get: function (target, key) {
		console.log(`监听 get ${key}`)
		return target[key]
	},
	set: function (target, key, value) {
		console.log(`监听 set ${key}`)
		target[key] = value
	}
})

console.log(objProxy.age)
objProxy.age = 25
console.log(objProxy.age)
console.log(obj)
