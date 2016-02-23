function changeColor() {
	document.getElementById("changeLink").style.color = "green";
}

function changeFont() {
	document.getElementById("changeLink").style.fontSize = "2em";
}

function changeBackground(eId){
	document.getElementById(eId).style.backgroundColor = "yellow";
}

function changeBackgroundBack(eId) {
	document.getElementById(eId).style.backgroundColor = "white";
}

function setInputValue() {
	var input = document.getElementById("changeValue");
	if(input.value === "") {
		input.value = 5;
		document.getElementById("inputValue").innerHTML = "O Valor do input é: " + input.value;
	}
	else {
		input.value = parseInt(input.value) + 1;
		document.getElementById("inputValue").innerHTML = "O Valor do input é: " + input.value;	
	}
}

function showClasses() {
	var elemClasses = document.getElementById("classElement").className;
	var p = document.getElementById("allClasses");

	p.innerHTML = elemClasses;
}

function addClass() {
	var elemClasses = document.getElementById("classElement").className += " font-small"; 
	var p = document.getElementById("allClasses");

	p.innerHTML = elemClasses;
}