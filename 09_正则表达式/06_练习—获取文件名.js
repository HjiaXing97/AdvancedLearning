const arr=['index.html','index.js','index.jsx','test.js','index.css','index.sass',]

for (let item of arr){
	if(/\.jsx?$/ig.test(item)){
		console.log(item)
	}
}