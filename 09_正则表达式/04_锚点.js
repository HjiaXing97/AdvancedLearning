const message = 'my name is hjx'

if(/^my/ig.test(message)){
	console.log('my开头')
}

if(/^my\s\w*\s*hjx$/ig.test(message)){
	console.log(1)
}