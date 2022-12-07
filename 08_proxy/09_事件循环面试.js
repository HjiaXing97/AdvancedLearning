console.log('script start')

setTimeout(() => {
	console.log('setTimeout1')
	new Promise(resolve => {
		resolve()
	}).then(res => {
		new Promise(resolve => {
			resolve()
		}).then(res => {
			console.log('then4')
		})
		console.log('then2')
	})
})

new Promise(resolve => {
	console.log('Promise1')
	resolve()
}).then(res => {
	console.log('then1')
})

setTimeout(() => {
	console.log('setTimeout2')
})

console.log('2')
queueMicrotask(() => {
	console.log('queueMicrotask')
})
new Promise(resolve => {
	resolve()
}).then(res => {
	console.log('then3')
})

console.log('script end')