'use strict';
var app = angular.module('testui', ['ui.router']);  //'ui.router'
app.config(function($stateProvider, $urlRouterProvider) { 

  	$urlRouterProvider.otherwise('/');
	 $stateProvider
	 .state('user',{
	 	url: "/",
	 	templateUrl : "user.html",
	 	 controller: 'user'
	 })
	  .state('address',{
	 	url: "/address",
	 	templateUrl : "address.html",
	 	 controller: 'address',
	 	 params: { data: null},
	 }).state('contact',{
	 	url: "/contact",
	 	templateUrl : "contact.html",
	 	 controller: 'contact'
	 }).state('about',{
	 	url: "/about",
	 	templateUrl : "about.html",
	 	 controller: 'about'
	 });
});
app.controller('user', ['$scope', function($scope){

	$scope.rt = "kumars";
	
}]).controller('about', ['$scope','$state', function($scope, $state){

	$scope.gotoAddress = function(){
		$state.go('address',{'data':true});
	}
	
}]).controller('address', ['$scope', '$stateParams' ,function($scope,  $stateParams){

	$scope.addressData = $stateParams.data;
	console.log($scope.addressData);
	
}]).controller('contact', ['$scope','$stateParams', function($scope,  $stateParams){
		$scope.addressData = null;
	$scope.addressData = $stateParams.data;
	console.log($scope.addressData);
	
}]);

