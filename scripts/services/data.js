
angular.module("myApp")
.service('dataService', function($http) {
  this.getArticles = function(callback) {
    $http.get('scripts/response.json')
    .then(callback)
  }
})
