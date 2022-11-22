const p1 = new Promise(resolve => {
	setTimeout(() => {
		resolve(1000)
	}, 1000)
})

const p2 = new Promise(resolve => {
	setTimeout(() => {
		resolve(2000)
	}, 2000)
})

const p3 = new Promise(resolve => {
	setTimeout(() => {
		resolve(3000)
	}, 3000)
})

Promise.all([p1, p2, p3]).then(res => {
	console.log('all', res)
}).catch(e => {
	console.log(e)
})


Promise.any([p1, p2, p3]).then(res => {
	console.log('any', res)
}).catch(e => {
	console.log(e)
})

Promise.race([p1, p2, p3]).then(res => {
	console.log('race', res)
}).catch(e => {
	console.log(e)
})