var app = angular.module('chang', ['ngAnimate', 'ngCookies', 'ui.bootstrap', 'angular-coms']);
app.controller("headerCtrl", ['$scope', function($scope) {
	$scope.tips = tips;
}]);
app.controller("footCtrl", ['$scope', function($scope) {
	$scope.tips = tips;
	$scope.links = links;
}]);
app.controller("NavCtrl", ["$scope", "Coms", function($scope, Coms) {
	$scope.menu = menu;
	$scope.click = function(method, link) {
		var deal = angular.bind(this, method, link, Coms);
		deal();
	}
}]);
app.controller("MainCtrl", ["$scope", "Coms", function($scope, Coms) {
	$scope.main = "html/introduce.html";
	Coms.onSignal('openLink', function(event, data) {
		console.log(data);
		$scope.main = data;
	}, $scope);
}]);
app.controller("endpointCtrl", ["$scope", function($scope) {
	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	$scope.ratingStates = [{
		stateOn: 'glyphicon-ok-sign',
		stateOff: 'glyphicon-ok-circle'
	}, {
		stateOn: 'glyphicon-star',
		stateOff: 'glyphicon-star-empty'
	}, {
		stateOn: 'glyphicon-heart',
		stateOff: 'glyphicon-ban-circle'
	}, {
		stateOn: 'glyphicon-heart'
	}, {
		stateOff: 'glyphicon-off'
	}];
}])