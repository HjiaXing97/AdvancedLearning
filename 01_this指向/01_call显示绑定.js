function foo(num1, num2) {
	console.log('foo', this)
	console.log(num1, num2)
}

const obj = {
	name: 'foo'
}


foo.call(obj, 1, 2, 3)

const arr = [1, 2, 3, 4, 5]

arr.forEach(function (item){
	console.log(item,this)
},obj)