var app = angular.module('myApp');
app.factory('LoginService', function() {
	var user = 'robin@vmware.com';
	var pass = 'robin123';
	var isAuthenticated = false;
	return {
		login : function(username, password) {
			isAuthenticated = username === user && password === pass;
			return isAuthenticated;
		},
        validateEmail : function(username) {
            var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
            return !EMAIL_REGEXP.test(username);
        },
        validatePassword : function(password) {
            return password.length < 6;
        },
		isAuthenticated : function() {
			return isAuthenticated;
		}
	};
});