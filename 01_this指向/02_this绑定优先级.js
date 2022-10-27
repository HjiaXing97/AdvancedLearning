function foo(){
	console.log('foo',this)
}

const bar = foo.bind('123')
bar.apply('abc')
