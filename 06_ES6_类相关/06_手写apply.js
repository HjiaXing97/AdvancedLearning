function foo(name, age) {
	console.log('this', this)
	console.log( 'name', name)
	console.log( 'age', age)
}

/**
 * @param this是foo函数
 * @param thisArg 需要变成foo函数的this
 */
Function.prototype.jxApply = function (thisArg, ...otherArg) {
	thisArg = (thisArg === undefined || thisArg === null) ? window : Object(thisArg)
	thisArg.fn = this
	console.log(...otherArg)
	thisArg.fn(otherArg)
}

foo.jxApply('1', ['hjx', 11])
