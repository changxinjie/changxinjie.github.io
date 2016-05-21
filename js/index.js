var app = angular.module('chang', ['ngAnimate','ngCookies','ui.bootstrap']);
app.controller("headerCtrl",['$scope',function($scope){
	$scope.tips = tips;
}]);
app.controller("footCtrl",['$scope',function($scope){
	$scope.tips = tips;
	$scope.links = links;
}]);
app.controller("NavCtrl",["$scope",function($scope){
	$scope.menu = menu;
	$scope.click = function(method){
		let deal= angular.bind(this,method);
		deal();
	}
}]);
app.controller("MainCtrl",["$scope",function($scope){
	$scope.main = "html/introduce.html";
}]);
