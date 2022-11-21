const m1 = new Map()
m1.set('a', 111)
m1.set({name: 'hjx'}, 22222)
console.log(m1)
//forEach 获取的是value
m1.forEach(v => {
	console.log(v)
})

for (const v of m1) {
	const [key, value] = v
	console.log(v)
	console.log(key)
	console.log(value)
}