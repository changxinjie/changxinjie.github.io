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
	$scope.rate = 3;
	$scope.max = 5;
	$scope.showDetail = "熟悉常用功能";
	$scope.info = true;
	$scope.warning = $scope.success = false;
	$scope.hoveringOver = function(value) {
		switch (value) {
			case 1:
				$scope.showDetail = "了解基本内容";
				$scope.warning = true;
				$scope.info = $scope.success = false;
				break;
			case 2:
				$scope.showDetail = "简单使用";
				$scope.info = true;
				$scope.warning = $scope.success = false;
				break;
			case 3:
				$scope.showDetail = "熟悉常用功能";
				$scope.info = true;
				$scope.warning = $scope.success = false;
				break;
			case 4:
				$scope.showDetail = "熟练使用大部分功能";
				$scope.success = true;
				$scope.info = $scope.warning = false;
				break;
			case 5:
				$scope.showDetail = "精通";
				$scope.success = true;
				$scope.info = $scope.warning = false;
				break;
		}
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
}]);
app.controller("workHistoryCtrl",['$scope',function($scope){
	
}]);