angular.module('shortly.shortlink', [])
.directive('shortLink', function () {
  return {
    restrict: 'AEC',
    templateUrl: 'app/links/shortlink.html'
  };
});
