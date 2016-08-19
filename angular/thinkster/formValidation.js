angular.module("app", []);

angular.module("app").controller("FormCtrl", ["$scope", function($scope) {
	$scope.formInfo = false;
	$scope.master = {};

	$scope.save = function(user) {
		$scope.master = angular.copy(user);
	}

	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	}

	$scope.reset();
}]);