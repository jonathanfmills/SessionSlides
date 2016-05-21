var greetingService = function(name){
	var called = 0;
	
	var sayHi = function(){
		console.log('hi ' + name);
		called++;
		console.log(`called ${called} times`);	
	}
	
	return{sayHi}
}



console.log(gs);
gs.sayHi();
gs.sayHi();
gs.sayHi();
gs.sayHi();
