var app = angular.module('chang', ['ngAnimate','ngCookies','ui.bootstrap']);
app.controller("headerCtrl",['$scope',function($scope){
	$scope.tips = tips;
}]);
app.controller("footCtrl",['$scope',function($scope){
	$scope.tips = tips;
}]);