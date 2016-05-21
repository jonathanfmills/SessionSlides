
var obja = {
	greeting: 'Hello',
	sayHi: function (name) {
		console.log(this);
		document.write(this.greeting + ' ' + name)
	},
	sayHiAsync: function (name) {
		var ctrl = this;
		setTimeout(function () {
			console.log(this);
			document.write(this.greeting + ' ' + name)
		}, 500)
	}
}
obja.sayHiAsync();