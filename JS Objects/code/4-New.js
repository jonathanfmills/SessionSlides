var Person = function(name, age){
	this.name=name;
	this.age = age;
}

Person.prototype.greet = function () {
	console.log(`hello ${this.name}`);
};

var jon = new Person('jon', 'old');
var spencer = new Person('spencer', 'young');

jon.greet();
spencer.greet();

Person.prototype.greet = function () {
	console.log(`goodbye ${this.name}`);
};

jon.greet();
spencer.greet();
console.log(jon.__proto__);