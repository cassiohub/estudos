var object1 = {
	name: "Cassio",
	age: 23,
	position: "Intern",
	getPropType: function(type) { // get properties of typeof === type
		var propType = []; 
		for (prop in this) { // use this to keep code general
			if (typeof this[prop] === type) {
				propType.push(prop);
			}
		}
		return propType;
	} 
}; 
console.log(object1.getPropType("string"));
var object2 = {name: "Mario", age: 40, position:"Manager"};
console.log(object1.getPropType.call(object2, "string"));
// will use object1 method with object2 as parameter 
// object1.getPropType is accessed as a property of object1
