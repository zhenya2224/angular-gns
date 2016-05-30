
angular.module("myApp")

.controller('mainCtrl', function($scope, dataService) {

dataService.getArticles(function(response) {
    $scope.articles = response.data[0].articles;
    $scope.categories = response.data[1].categories;
  })

 $scope.gameName = function() {
  gameTitle = this.article.title;
  gameImage = this.article.image;
  gameBodyMessage = this.article.body;
  gameDate = this.article.date_published;
  gameCategory = this.article.category_id;
};

})

.controller('newCntr', ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
  $scope.gameTitle = gameTitle;
  $scope.gameImage = gameImage;
  $scope.gameDate = gameDate;
  $scope.gameCategory = gameCategory;
  $scope.gameBodyMessage = gameBodyMessage;
}])
