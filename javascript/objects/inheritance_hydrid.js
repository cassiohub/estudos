function Polygon (sides) {
	this.sides = sides;
}
Polygon.prototype.getArea = function () {
	return 0;
}


function Triangle (base, height) {
	Polygon.call(this, 3);
	this.base = base;
	this.height = height;
}
Triangle.prototype = new Polygon(); // create a new Polygon 
Triangle.prototype.getArea = function() {
	return this.base * this.height * 0.5;
}


function Retangle (length, width) {
	Polygon.call(this, 4);
	this.length = length;
	this.width  = width;
}

Retangle.prototype = new Polygon();
Retangle.prototype.getArea = function (length, width) {
	return length * width;
}

var t = new Triangle(30, 15);
for(prop in t) {
	console.log(prop, ": ", t[prop]);
}