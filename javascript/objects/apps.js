/* Objects */
console.log("\n=== Objects ===\n");

console.log("\nLiteral Notation\n");
// literal notation
var person1 = {
	name: 'Cassio',
	title: 'Student',
	bornYear: 1993,
  calcAge: function(){
    return 2016 - this.bornYear;
  }
}

console.log(person1)
console.log("\nreturn method: calcAge()", person1.calcAge());
console.log("\ncheck if property exist");
console.log("\"name\" in person1: ", "name" in person1);


console.log("\n\nConstructor Method\n");
//constructor method
function Person(name, title, bornYear, salary) {
  this.name = name;
  this.title = title;
  this.bornYear = bornYear;

  this.calcAge = function() {
    return 2016 - this.bornYear;
  }
};

var person2 = new Person("Joao", "Master", 1970, 5000);
var person3 = new Person("Mike", "Junior", 1985, 3000);
console.log(person2);
console.log(person3);

/* 
  Prototype - manage properties and method of a Class
    - add new properties or methods to all objects of a class (created or not created already)
    - all of them will share the same thing if it was assignment to the Class
    - you can override a prototype property assinging it directly to the object
    - prototype methods can access objects properties (this.*)
*/
Person.prototype.sayNameAndTitle = function() {
  return console.log("My name is " + this.name + ", I'm a " + this.title);
};

/* overriding a prototype method for a particular object */
person2.sayNameAndTitle = function() {
  return console.log("I'm the boss here");
}

person3.sayNameAndTitle();
person2.sayNameAndTitle();


console.log("\n\nList of properties of a object: for (var prop in object) { ... } ");
for (var prop in person3) {
  console.log("\tperson["+prop+"] = " + person3[prop]);
}

console.log("\n\nCheck if a property came from the object constructor or from the prototype");
console.log("object.hasOwnProperty([property name]) = true (constructor) or false (prototype)");
console.log("person3.hasOwnProperty(\"name\"): " + person3.hasOwnProperty("name"));
console.log("person3.hasOwnProperty(\"sayNameAndTitle\"): " + person3.hasOwnProperty("sayNameAndTitle"));

