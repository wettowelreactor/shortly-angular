angular.module('shortly.links', ['shortly.shortlink'])

.controller('LinksController', function ($scope, Links) {
  Links.fetchAll(function(data){
    $scope.links = data;
  });
});
