function asyncMethod(message, num, cb) {

	setTimeout(function () {
		console.log(message);
		cb();
	}, 500)

};

var validateUser = function () {
	asyncMethod('validateUser', 1, doStuff)
}

var doStuff = function () {
		asyncMethod('do stuff', 1, function () {})
	}
asyncMethod('Open DB Connection', 0,findAndValidateUser)