angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(isValid){
    console.log(isValid);
    if (isValid) {
      Links.pushLink($scope.shortLink);
      $location.path('/');
    }
  };
});
