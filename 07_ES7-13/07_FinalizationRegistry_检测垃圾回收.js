let obj = {
	name: 'hjx',
	age: 25
}

const finaRegistry = new FinalizationRegistry(() => {
	console.log('obj is null')
})
finaRegistry.register(obj, "some value", obj)
obj = null
