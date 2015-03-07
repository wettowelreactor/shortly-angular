angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(){
    console.log('before add link ', $scope.shortLink);
    Links.pushLink($scope.shortLink);
    console.log('after add link');
  };
});
