class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(`hello ${this.name}`);
	}
}

var jon = new Person('jon', 'old');

var spencer = new Person('spencer', 'young');

jon['name'] = 
jon.greet();
spencer.greet();
console.log(jon.__proto__);