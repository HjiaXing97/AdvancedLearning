const promise = new Promise((res, reject) => {
	reject('res')
})

promise.catch(res => {
	console.log('6 res', res)
	throw new Error('throw')
}).then(res => {
	console.log('8 res', res)
	return 222
}).then(res => {
	console.log('11 res', res)
}).catch(e => {
	console.log('13 e', e)
})