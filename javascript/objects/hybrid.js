/*
 Hibryd Constructor + Prototype Paradigm - best of both worlds
 
 PROS
   - Have semantic approach using new keyword and constructor
   - Shared method through propotype property
*/

function Car (color, doors, mpg, drivers) {
	this.color = color;
	this.doors = doors;
	this.mpg = mpg;
	this.drivers = drivers;
}

Car.prototype.showColor = function () {
	console.log("The color is", this.color) // can use this keyword to access object properties
}

var car1 = new Car("blue", 4, 23, ["Mike", "Ana"]);
var car2 = new Car("red", 2, 25, ["Mike", "Ana"]);

car1.showColor();
car2.showColor();

car1.drivers.push("John"); // add new driver on car1;
console.log(car1.drivers);
console.log(car2.drivers); // won't add new driver on car2