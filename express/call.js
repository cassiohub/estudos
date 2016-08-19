var person = {
	fullName: "Not Set",
	setFullName: function(fname, lname) {
		this.fullName = fname + " " + lname;
	}
}

function getFullName(fname, lname, callback, obj) {
	callback.call(obj, fname, lname);
}

getFullName("Barak", "Obama", person.setFullName, person);
console.log(person.fullName);
//console.log(fullName);