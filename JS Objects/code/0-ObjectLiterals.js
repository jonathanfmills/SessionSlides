var x = {};

var person = {
	name: "Jon",
	age: "Old",
	sayHi: function(){
		console.log(`Hi ${this.name}`);
	}
}

person.sayHi();

person.name = "Bill";

