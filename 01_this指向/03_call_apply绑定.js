const obj = {
	name: 'hjx',
}

function foo(...args) {
	console.log(this)
	console.log(args)
}

foo.apply(obj, [1, 2])
foo.call(obj, 1, 2, 3, 4, 5)
