angular.module("myApp")

.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl'
    })
    
    .when('/readmore', {
        templateUrl: 'pages/article.html',
        controller: 'newCntr'
    })
    
    
})