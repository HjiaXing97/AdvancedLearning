/**
 * async函数返回一个promise 如果返回的不是一个promise对象，则返回值会被Promise.resolve包裹
 * @returns {Promise<number>}
 */

async function foo() {
	console.log(1)

	return 12
	// return new Promise(resolve => {
	// 	resolve(2)
	// })
}

foo().then(res => {
	console.log(res)
})