angular.module("ListaTelefonica").factory("contatosAPI", function($http, config) {
	var _getContatos = function() {
		return $http.get(config.baseURL + "contatos");
	}

	var _addContato = function(contato) {
		return $http.post(config.baseURL + "contatos", contato);
	}

	return {
		getContatos: _getContatos,
		addContato:  _addContato
	}
});