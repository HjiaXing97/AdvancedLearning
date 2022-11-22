/**
 * resolve 可以传递的值: 字符串、数组、对象、promise
 *
 */
const p = new Promise(res => {
	res('p res')
})

const promise = new Promise((resolve, reject) => {
	resolve(p)
})

promise
		.then(res => {
			console.log(res)
		}).catch(e => {
	console.log(e)
})

