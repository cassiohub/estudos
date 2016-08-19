angular.module("ListaTelefonica").filter("name", function() {
	return function(input) {
		var listaNomes = input.split(" ");
		var listaNomesFormatados = listaNomes.map(function(nome) {
			if(/(da|de)/.test(nome)) return nome.toLowerCase();
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaNomesFormatados.join(" ");
	}
});