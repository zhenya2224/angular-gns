
angular.module("myApp", ['ngRoute'])

.config(function ($routeProvider) {
   
    $routeProvider
    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl'
    })
    
    .when('/readmore/:itemId', {
        templateUrl: 'pages/article.html',
        controller: 'newCntr'
    }).
    	otherwise({
		redirectTo: '/home'
	})
    
})