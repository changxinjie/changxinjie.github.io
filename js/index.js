var app = angular.module('chang', ['ngAnimate', 'ngCookies', 'ui.bootstrap', 'angular-coms']);
app.controller("headerCtrl", ['$scope', function($scope) {
	$scope.tips = tips;
}]);
app.controller("footCtrl", ['$scope', function($scope) {
	$scope.tips = tips;
	$scope.links = links;
}]);
app.controller("NavCtrl", ["$scope","Coms", function($scope,Coms) {
	$scope.menu = menu;
	$scope.click = function(method,link) {
		var deal = angular.bind(this, method, link,Coms);
		deal();
	}
}]);
app.controller("MainCtrl", ["$scope","Coms", function($scope,Coms) {
	$scope.main = "html/introduce.html";
	Coms.onSignal('openLink', function(event, data) {
		console.log(data);
		$scope.main = data;
	}, $scope);
}]);