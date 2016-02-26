/* Some uses case of array utilities functions to demonstrate functional programming on javascript */

var animals = [
	{ name: 'Twister' , species: 'dog'},
	{ name: 'Vitorio' , species: 'dog'},
	{ name: 'Mal' , species: 'cat'},
	{ name: 'Hani' , species: 'dog'},
	{ name: 'Mingo' , species: 'bird'},
	{ name: 'Lam' , species: 'cat'},
];

/* map() 
	receive a callback function which is executed on every interated item 
	return a new array from it 
*/
var animalsNames = animals.map(function(animal){
	return animal.name;
});
console.log("\nAnimals Names: ", animalsNames);

/* filter()
   receive a callback function which is executed on every interated item
   return true or false for a boolean operation from the callback function
   if true, iterated item is pushed into returning array
*/
var dogs = animals.filter(function(animal){
	return animal.species === "dog";
});
console.log("\nDogs: \n", dogs);

/* filter() can be used for false statments */
var notDogs = animals.filter(function(animal){
	return animal.species !== "dog";
});
console.log("\nNot Dogs: \n", notDogs);


/* find() 
	similiar to filter(), but returns only the first iterated item who return true 
*/
var bird = animals.find(function(animal){
	return animal.species === "bird";
});
console.log("\nBird: \n", bird);


/* reduce() 
	general use array transformation function
	can be use for whatever you want
	receive the accumulator variable and the iterated item as parameters
*/
var shopProducts = [
	{ itemNum: 3, price: 50},
	{ itemNum: 2, price: 30},
	{ itemNum: 4, price: 10},
	{ itemNum: 1, price: 70}
];
var total = shopProducts.reduce(function(sum, item){
	return sum + item.price;
}, 0);
console.log("\n\nTotal Shop: ", total, "\n\n");

/* read from a file exemple
		will transform text from a file
		into a JSON
*/
var fs = require("fs");

var output = fs.readFileSync('data.txt', 'utf-8')
			   .trim()
			   .split("\n")
			   .map(function(line){ return line.split("\t") })
			   .reduce(function(customers, line){
			   		customers[line[0]] = customers[line[0]] || [];
			   		customers[line[0]].push({
			   			name: line[1],
			   			price: line[2],
			   			qty: line[3]
			   		});
			   		return customers
			   }, {});
/*
	trim()   removes white spaces from beginning and end of text;
	split()  break text lines and return an array;
	map() 	 splited array and split again on \t to create "columns";
	reduce() returns a customers array with objects;
*/
console.log(JSON.stringify(output, null, 2));



