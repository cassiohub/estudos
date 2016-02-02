/* Math */
console.log("\n=== Math ===");
console.log("Math.random() => " + Math.random()) // random number between 0 and 1

console.log("Math.floor(1.4) => " + Math.floor(1.4)) // return the largest integer less than or equal to a number

console.log("Math.ceil(1.4) => " + Math.ceil(1.4)) // return the smaller integer greater than or equal to a number

console.log("Math.pow(2, 4) => " + Math.pow(2, 4)) // return the power of a number


/* Numbers */
console.log("\n=== Numbers ===");
var x = 15
console.log("x: "+ x)
var y = x++ // set y = x, then increment x
console.log("x: "+ x)
console.log("y: "+ y)

var z = 3
console.log("z: "+ z)
var w = ++z // increment z, then set w = z
console.log("z: "+ z)
console.log("w: "+ w)


/* Arrays */
console.log("\n=== Arrays ===");

var array = ['Cassio', 'javascript', 10];
console.log("Simple array: "+ array);
console.log("Simple array length: "+ array.length);
console.log("Simple array by index: "+ array[1]);
console.log("Iterating an array:");
for(i=0; i< array.length; i++){
	console.log("\t["+i+"] "+array[i]);
}

var arrayArrays = [[0,1,2,3], [4,5,6,7], [8,9,10,11]];
console.log("Array of Arrays: " + arrayArrays);

/* Objects */
console.log("\n=== Objects ===");

// literal notation
var person1 = {
	name: 'Cassio',
	title: 'Student',
	age: 22
}

//construction notation
var person2 = new Object();
person['name'] = 'Joao';
person.age = 25;











