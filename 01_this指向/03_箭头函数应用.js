function request(url, callback) {
	const result = [1, 2, 3]
	callback(result)
}

const obj = {
	names: [],
	network: function () {
		request('123', res => {
			this.names = res
		})
	}
}
obj.network()
console.log(obj)