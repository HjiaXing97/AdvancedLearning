const obj = {
	age: 25
}

Object.defineProperty(obj, 'name', {
	configurable: true,
	enumerable: true,
	writable: true,
	value: 'hjx'
})

const objProxy = new Proxy(obj, {
	/**
	 * Reflect的好处
	 * 1. 操作代理对象而不是直接操作原对象
	 * 2. Reflect的set方法会返回一个Boolean，可以判断当前设置值是否生效
	 */

	/**
	 * @param target
	 * @param key
	 * @param newValue
	 * @param receiver
	 */
	set: function (target, key, newValue, receiver) {
		const isSuccess = Reflect.set(target, key, newValue)
		if (!isSuccess) {
			throw new Error(`${key} 操作失败`)
		}
	},
	get:
			function (target, key) {
				return Reflect.get(target, key)
			},
})

objProxy.name = 'cp'
console.log(obj)
console.log(objProxy)
