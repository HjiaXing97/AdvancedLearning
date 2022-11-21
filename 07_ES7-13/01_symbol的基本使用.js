const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol('aaa')

const obj = {
	[s1]: 'hjx'
}
console.log(s1 === s2)
console.log('s1',s1)
console.log('s2',s2)
console.log(obj)
console.log(obj[s1])
console.log(s3.description)