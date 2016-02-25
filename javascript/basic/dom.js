/* DOM - Document Object Model

- document > html > head > title > text ^ body > div > p > text > em
- document has only one child
- html has two children
- div has 3 children - em is text node child
*/
var f3 = document.getElementById("f3");
var children_f3 = f3.childNodes;
console.log("Fieldset node has "+ children_f3.length +" children: ");
console.log(children_f3);
console.log("children_f3[1]: " + children_f3[1]);
console.log("f3.nodeType: " + f3.nodeType);
console.log("children_f3[2].nodeType: " + children_f3[2].nodeType);
console.log("nodeType: 1 = element, 3 = text");
console.log("f3.nodeName: " + f3.nodeName + " (element name)");
console.log("children_f3[2].nodeName: " + children_f3[2].nodeName + " (text node)");
console.log("f3.nodeValue: " + f3.nodeValue + " (element value is always null)");
console.log("children_f3[1].firstChild.nodeValue: \"" + children_f3[1].firstChild.nodeValue + "\" (only #text elements has nodeValue)");

/* Other ways of tergeting elements */
/* sometimes the node can be a text node inserted by the browser */
console.log("parentNode: " + children_f3[0].parentNode);
console.log("firstChild: " + f3.firstChild);
console.log("lastChild: " + f3.lastChild);
console.log("nextSibling: " + f3.nextSibling);
console.log("previousSibling: " + f3.previousSibling);

/* Elements attributes */
var f4 = document.getElementById("f4");
var children_f4 = f4.childNodes;
for (var i = 0; i < children_f4.length; i++) {
	if (children_f4[i].nodeName.toLowerCase() === "img") {
		var img = children_f4[i];
	} 
}

console.log("list of element's attributes names");
console.log(img.attributes);
console.log("Each attribute is a node, so it also have nodeName and nodeValue");
console.log("img.attributes[1].nodeName: " + img.attributes[1].nodeName);
console.log("img.attributes[1].nodeValue: " + img.attributes[1].nodeValue);
console.log("img.hasAttribute('alt'): " + img.hasAttribute('alt'));
console.log("img.getAttribute('class'): " + img.getAttribute('class'));
console.log("img.setAttribute('class', 'image-other');");
img.setAttribute('class', 'image-other');
console.log("img.getAttribute('class'): " + img.getAttribute('class'));


/* Creating Elements */
var nodeToAdd = document.createElement("p");
nodeToAdd.setAttribute("class", "normal");
var nodeTxt = document.createTextNode("Hello, World!");
nodeToAdd.appendChild(nodeTxt);

var anotherNode = document.createElement("a");
anotherNode.setAttribute("href", "#");
var linkText = document.createTextNode("Link inserted");
anotherNode.appendChild(linkText);

// appendChild() will insert at the end of the tree;
f4.appendChild(nodeToAdd);
// insertBefore receive a second parameter
f4.insertBefore(anotherNode, nodeToAdd);

// removing a element
//f4.removeChild(f4.childNodes[1]); OR
var oldE = f4.childNodes[1];
f4.removeChild(oldE);

var middleE = document.createElement("p");
var middleTxt = document.createTextNode("Inserted on the middle");
middleE.insertBefore(middleTxt, middleE.lastChild);

// insert before the next element (trick because there is no insertAfter() method)
f4.insertBefore(middleE, anotherNode.nextSibling);







