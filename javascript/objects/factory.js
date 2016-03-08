/*
  Factory Paradigm
  
  PROS
   - Easy to create multiples objects;
   - Objects don't share properties

  CONS
   - Use of a temporary object;
   - Every instance will have a copy of showColor method (bad if you need change the code someday)
*/

function createCar(color, doors, mpg) {
	var tempCar = new Object();
	tempCar.color = color;
	tempCar.doors = doors;
	tempCar.mpg   = mpg;
	tempCar.showColor = function() {
		console.log("The color is", tempCar.color);
	}
	return tempCar;
}

var car1 = createCar("blue", 4, 23);
var car2 = createCar("red", 2, 28);

car1.showColor();
car2.showColor();