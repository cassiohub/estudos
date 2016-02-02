/* HOISTING CONCEPTS */

/* Variables */ 
var x = 10;

function y(){
	console.log(x);
	var x = 3;
	console.log(x);
}

y();
console.log(x);


/* Functions */
/* 
	Declaring the function this way will put it inside global scope, so it can be
	accessed anywhere, any time, even if it were called before it declaration.
 */
sayHello();
function sayHello() {
	console.log("Hello");
}

/* 
	Not Defined because the function is hoisted inside the variable scope.
 */
sayBye(); // sayBye is not a function.
var sayBye = function(){
	console.log("Bye");
}