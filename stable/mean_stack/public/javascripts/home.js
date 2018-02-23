var app = angular.module('hashplay', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'index.html',
      controller: 'indexController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/signup', {
      templateUrl: 'signup.html',
      controller: 'authController'
    })

    .when('/upload',{
    	templateUrl: 'upload.html',
    	controller: 'uploadController'
    })

    .when('/admin',{
    	templateUrl: 'admin.html',
    	controller; 'adminController'
    })

    .when('/user',{
    	templateUrl: 'user.html',
    	controller: 'userController'
    })

    .when('/artist',{
    	templateUrl: 'artist.html',
    	controller: 'artistController'
    })

    .when('/issuecopy',{
    	templateUrl: 'issue_copy.html',
    	controller: 'issuecopyController'
    });
});

app.controller('authController',function($scope){
	$scope.users = [];
	$scope.user = {username: '', password: ''};

	$scope.signup = function(){
		$scope.users.push($scope.user);
		$scope.error_message = 'You have successfully signed in as '+$scope.user.username;
		$scope.user = {username: '', password: ''};

	};

	$scope.login = function(){

	}
});



app.controller('uploadController', function(){

});


