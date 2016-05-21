
var x = {
	name: 'Jon'
};

Object.defineProperty(x, 'toString', {
	value: function () {
		console.log(this);
		console.log('Hi ' + this.name);
	},
	writeable: false,
	enumerable: false,
	configurable: true
})


x.toString = 'hi'

x.toString();