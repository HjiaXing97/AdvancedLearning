function foo() {
	const bar = () => {
		console.log(arguments)
	}
	bar()
}

foo(1, 2, 3, 4, 5)