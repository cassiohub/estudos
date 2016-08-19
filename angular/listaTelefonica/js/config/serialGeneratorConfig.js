//O nome do modulo é só serialGenerator, mas como ele é um provider, o angular 
//adiciona o sufixo Provider no nome dele aqui no arquivo de configuração
angular.module("ListaTelefonica").config(function (serialGeneratorProvider) {
	serialGeneratorProvider.setLength(10);
	console.log(serialGeneratorProvider.getLength());
});