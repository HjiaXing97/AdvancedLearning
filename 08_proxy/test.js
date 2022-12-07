const obj = {
	name: 'cp',
	age: 19
}

const keys = Object.keys(obj)
console.log('keys', keys)
for (let i = 0; i < keys.length; i++) {
	console.log('i', i)
	const key = keys[i]

	console.log('key', key)
	const value = obj[key]

	console.log('value', value)
}