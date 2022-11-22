const getData = (res) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(res)
		}, 1000)
	})
}
//直接返回一个promise
function resultData() {
	getData(1).then(res => {
		console.log(res)
		return getData(2)
	}).then(res => {
		console.log(res)
		return getData(3)
	}).then(res => {
		console.log(res)
	})
}

resultData()