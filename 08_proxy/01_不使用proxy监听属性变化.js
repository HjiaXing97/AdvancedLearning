const obj = {
	name: 'hjx',
	age: 25
}

/**
 * 弊端
 * 1. 只能监听设置和获取的方法，无法监听新增、删除属性的操作
 */

Object.keys(obj).forEach(key => {
	let value = obj[key]
	Object.defineProperty(obj, key, {
		get: function () {
			console.log(`监听${key}属性的变化`)
			return value
		},
		set(v) {
			console.log(`监听${key}设置属性`)
			value = v
		}
	})
})


obj.age = 25
obj.name = 'cp'
console.log(obj.age)
console.log(obj.name)