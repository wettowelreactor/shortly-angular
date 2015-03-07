angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  console.log('Before');
  Links.fetchAll(function(data){
    console.log('callback');
    $scope.links = data;
  });
  console.log('After', $scope.links);
});
