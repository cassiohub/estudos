angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", 
	["$scope", "$http", "contatosAPI", "operadorasAPI", "serialGenerator", 
	function($scope, $http, contatosAPI, operadorasAPI, serialGenerator) {
	$scope.app = "Lista Telefônica";

	$scope.contatos = [];
	$scope.operadoras = [];

	/*var getContatos = function() {
		$http.get("http://localhost:3412/contatos").success(function(data, status) {
			$scope.contatos = data;
		});
	}
	getContatos();

	var getOperadoras = function() {
		$http.get("http://localhost:3412/operadoras").success(function(data, status) {
			$scope['operadoras'] = data;
		});
	}
	getOperadoras();*/

	/*var getResources = function(resources) {
		var uri = "http://localhost:3412/";
		$http.get(uri + resources).then(function(response) {
			$scope[resources] = response.data;
		}, function(err) {
			console.log(err);
		});
	}
	getResources("contatos");
	getResources("operadoras");*/

	operadorasAPI.getOperadoras().success(function(data) {
		$scope.operadoras = data;
	});

	contatosAPI.getContatos().success(function(data) {
		$scope.contatos = data;
	}).error(function (data, status) {
		$scope.error = "Não foi possível carregar os dados!";
	});

	$scope.addContato = function(contato) {
		contato.data = new Date();
		contato.serial = serialGenerator.generate();

		contatosAPI.addContato(contato).success(function() {
			contatosAPI.getContatos().success(function(data) {
				$scope.contatos = data;
			});
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
		});
	}

	$scope.isContatosSelecionados = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	}
	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado) return contato;
		});
	}

	$scope.ordenarPor = function(campo) {
		$scope.campoDeOrdenacao = campo;
		$scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
	}
}]);