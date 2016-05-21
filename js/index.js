var app = angular.module('chang', ['ngAnimate','ngCookies','ui.bootstrap']);
app.controller("headerCtrl",['$scope',($scope)=>{
	$scope.tips = tips;
}]);
app.controller("footCtrl",['$scope',($scope)=>{
	$scope.tips = tips;
	$scope.links = links;
}]);
app.controller("NavCtrl",["$scope",($scope)=>{
	$scope.menu = menu;
	$scope.click = (method)=>{
		let deal= angular.bind(this,method);
		deal();
	}
}]);
app.controller("MainCtrl",["$scope",($scope)=>{
	$scope.main = "html/introduce.html";
}]);
