function currying(fn) {
	function currFn(...args) {
		if (args.length >= fn.length) {
			return fn(...args)
		} else {
			return function (...newArgs) {
				return currFn(...args.concat(newArgs))
			}
		}
	}

	return currFn
}

function fn(x, y, z) {
	return x + y + z
}

const foo = currying(fn)

const num = foo(1)(2)(3)
console.log(num)