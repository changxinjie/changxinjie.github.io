if(angular==undefined){
	alert("load local js files");
	document.write("<script src='js/angular.min.js'><\/script>");
}
var app = angular.module('chang', ['ngAnimate', 'ui.bootstrap', 'angular-coms']);
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
		$scope.main = data;
	}, $scope);
}]);
app.controller("skillCtrl", ["$scope", function($scope) {
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
	$scope.skills = skills;
}]);
app.controller("selfCtrl", ['$scope', function($scope) {
	$scope.self = self;
}]);
app.controller("workHistoryCtrl", ['$scope', function($scope) {

}]);
app.controller("investCtrl", ['$scope', function($scope) {
	$scope.investement = investement;
}]);
app.controller("avCtrl", ['$scope', function($scope) {
	$scope.avItems = avItems;
}]);
app.controller("rentCtrl", ['$scope', function($scope) {
	$scope.rentItems = rentItems;
}]);
app.controller("homeCtrl", ['$scope', function($scope) {
	$scope.homeItems = homeItems;
}]);
app.controller("browserCtrl", ['$scope', function($scope) {
	var canvas = document.getElementById("canvas");
	var webgl = canvas.getContext("experimental-webgl") || canvas.getContext("webgl");
	$scope.navigator = [{
		k: "屏幕分辨率",
		v: screen.availWidth + "X" + screen.availHeight
	}, {
		k: "编码",
		v: navigator.appCodeName
	}, {
		k: "名称",
		v: navigator.appName
	}, {
		k: "版本",
		v: navigator.appVersion
	}, {
		k: "语言",
		v: navigator.language
	}, {
		k: "平台",
		v: navigator.platform
	}, {
		k: "用户代理",
		v: navigator.userAgent
	}, {
		k: "制造商",
		v: navigator.vendor
	}, {
		k: "WebGL",
		v: webgl == undefined || webgl == null ? "不支持" : "支持"
	}, {
		k: "Web SQL",
		v: !window.openDatabase ? "不支持" : "支持"
	}, {
		k: "Web Worker",
		v: typeof(Worker) == "undefined" ? "不支持" : "支持"
	}, {
		k: "Web Socket",
		v: "WebSocket" in window ? "支持" : "不支持"
	}, {
		k: "Server Sent Events",
		v: typeof(EventSource) == "undefined" ? "不支持" : "支持"
	}, ];
}]);