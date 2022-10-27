let name = 'window'

const person = {
	name: 'person',
	sayName: function () {
		console.log(this.name)
	}
}

function  sayName(){
	let sss = person.sayName;
	sss();  //window

	person.sayName() ; //person
	(person.sayName)();//person
	(b=person.sayName)();  //window
}

sayName()