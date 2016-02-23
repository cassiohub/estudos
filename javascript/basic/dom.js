/* DOM - Document Object Model

- document > html > head > title > text ^ body > div > p > text > em
- document has only one child
- html has two children
- div has 3 children - em is text node child
*/
var childre_f3 = document.getElementById("f3").childNodes;
console.log("Fieldset node has "+ childre_f3.length +" children: ");
console.log(childre_f3);
console.log("nodeType: 1 = element, 3 = text");
