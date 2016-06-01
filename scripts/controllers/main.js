
angular.module("myApp")

.controller('mainCtrl', function($scope, dataService) {

dataService.getArticles(function(response) {
    $scope.articles = response.data[0].articles;
    $scope.categories = response.data[1].categories;
  })

})

.controller('newCntr', ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
  dataService.getArticles(function(response) {
    $scope.articles = response.data[0].articles;
    $scope.categories = response.data[1].categories;
    $scope.whichItem = $routeParams.itemId;
  })
}])
