var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
	$rootScope.title = "Login App";
	$scope.formSubmit = function() {
        if(LoginService.validateEmail($scope.username)){
            $scope.error = "Invalid Email";
        } else if (LoginService.validatePassword($scope.password)) {
            $scope.error = "Password should be at least of 6 characters";
        } else if(LoginService.login($scope.username, $scope.password)) {
			$rootScope.userName = $scope.username;
			$scope.error = '';
			$scope.username = '';
			$scope.password = '';
			$state.transitionTo('home');
		} else {
			$scope.error = "Username/Password is wrong!";
		}   
	};    
});