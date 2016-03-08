/*
  Prototype Paradigm

  PROS
    - Semantic approach - can use instanceof
    - Shared method within all instances of the "Class"

  CONS
    - Shared properties (not methods) within all instances
*/

function Car () {
}

Car.prototype.color = "blue";
Car.prototype.doors = 4;
Car.prototype.mpg = 23;
/* Will add the method on every instance once. */
Car.prototype.showColor = function () {
	console.log("The color is", this.color); // can access object properties using this keyword
}

Car.prototype.drivers = ["Mike", "Ana"];

var car1 = new Car();
var car2 = new Car();

car1.showColor();
car1.drivers.push("John"); // add new driver on car1 drivers list
console.log(car1.drivers);
car2.showColor();
console.log(car2.drivers); // will add new driver on car2.drivers too

