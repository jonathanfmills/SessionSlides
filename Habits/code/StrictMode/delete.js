'use strict';
var obj = {a: 100, 
           b: 200},
    myVar = 10;

delete obj.a;
delete myVar;
delete obj;

console.log(obj);
console.log(myVar);