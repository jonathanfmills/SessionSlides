var x = 1;

var y = '1';

if (x == y) {
	document.write('Equal')
} else {
	document.write('Not Equal')
}

var x = false;

var y = 0;

if (x == y) {
	document.write('Equal')
} else {
	document.write('Not Equal')
}

var person = { name:'Jon', DOB: '4/11/76', single: false}

if(typeof person.name !== 'undefined'){
	document.write('Exists')
} else {
	document.write('Does Not ')
}


//typeof !== 'undefined'