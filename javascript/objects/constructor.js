/*
  Constructor Paradigm

  PROS
    - Instance is created using new keyword (semantic)
    - Automatic return the created object;

  CONS
    - Still duplicating the methods on every other new instance;

*/

function Car (color, doors, mpg) {
	this.color = color;
	this.doors = doors;
	this.mpg = mpg;

	this.showColor = function() {
		console.log("The color is", this.color);
	}
}

var car1 = new Car("blue", 4, 23);
var car2 = new Car("red", 2, 28);

car1.showColor();
car2.showColor();