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

/* Strings */
console.log("\n=== Strings ===");

var string = "Not very long string variable";
// Lenght => returns the string length
console.log("Length => "+ string.length);
console.log("toUpperCase() => "+ string.toUpperCase());
console.log("toLowerCase() => "+ string.toLowerCase());

// charAt => returns the char at a specified index.
console.log("charAt(4) => "+ string.charAt(4));

// indexOf() => returns the index of the string parameters first occurance. Return -1 if not found
console.log("indexOf('long') => "+ string.indexOf('long'));
//indexOf([fromIndex]) => returns the index of string parameter starting from the specified index
console.log("indexOf('string',[4]) => "+ string.indexOf('string',[4]));

// substring => returns the char array between two specified index
console.log("substring(6,11) => "+ string.substring(6,11));

// trim => returns string without lead and tailing spaces
console.log("trim() => "+ string.trim());

// replace => returns string with replaced characters
console.log("replace('Not', 'Another') => "+ string.replace('Not', 'Another'));

// split => returns an array of substring of the original string
console.log("split('r') => "+ string.split("r"));

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

console.log(person1)

//construction notation
var person2 = new Object();
person2['name'] = 'Joao';
person2.age = 25;

var setAge = function(age){
	this.age = age; // this this refer the object 
}

//a function as a object property is called Method

person2.setAge = setAge;
person2.setAge(99);
console.log(person2.age);




function Rectangle(height, width) {
  this.height = height || 8;
  this.width = width || 9;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return this.height * 2 + this.width * 2;
  }
}

var rex = new Rectangle(7,3);
var puppy = new Rectangle(7); //width = undefined 
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


// Ternary Operator
var grade = 51;
console.log("You "+ (grade>50 ? 'passed' : 'failed'));








