var person =
	Object.create(Object.prototype);

person.sayHi = function () {
	console.log(`Hi ${this.name}`);
}

person.name = "Bill";
person["age"] = 12;

console.log(person);
person.sayHi();

var youth = Object.create(person);
youth.age = "young"
console.log(youth);
console.log(youth.name);