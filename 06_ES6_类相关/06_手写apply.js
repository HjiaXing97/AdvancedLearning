function foo(name, age) {
	console.log(this, name, age)
}

/**
 * @param this是foo函数
 * @param thisArg 需要变成foo函数的this
 */
Function.prototype.jxApply = function (thisArg) {
	thisArg.fn = this
	thisArg.fn()
}

foo.jxApply({test: 1233})
