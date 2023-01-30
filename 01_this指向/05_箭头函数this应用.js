function request(url, callback) {
	const result = [1, 2, 3]
	callback(result)
}

const obj = {
	name: [],
	network: function () {
		request('/123', (res) => {
			this.name = res
			console.log(this)

		})
	}
}

obj.network()