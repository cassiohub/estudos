function Car(color, doors, mpg) {
	this.color = color;
	this.doors = doors;
	this.mpg = mpg;

	if(typeof Car._init === "undefined") {
		Car.prototype.showColor = function() {
			console.log(this.color);
		};
	}
	Car._init = true;
}

var car1 = new Car("blue", 3, 40);
car1.showColor();