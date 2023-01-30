const obj = {
	name: 'hjx',
	foo: function () {
		return () => {
			console.log('bar', this)
		}
	}
}

const bar = obj.foo()
bar.apply('aaa')