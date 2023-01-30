const obj = {
	name: 'hjx',
}

function foo(...args) {
	console.log(this)
	console.log(args)
}

foo.apply(obj, [1, 2])
foo.call(obj, 1, 2, 3, 4, 5)

const newObj = Object.assign({a: 1, b: 2, name: 'cp'}, obj)
console.log(newObj)
