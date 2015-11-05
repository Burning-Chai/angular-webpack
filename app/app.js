var angular = require('angular');
var angularRoute = require('angular-route');

require('bootstrap/dist/css/bootstrap.css');

require('./css/page1.css');

var App = angular.module('app', [
  angularRoute
]);

App.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/page1', {
      template: require('./template/page1.html')
    })
    .when('/page2', {
      controller: require('./controller/page2-controller'),
      template: require('./template/page2.html')
    })
    .otherwise({
      redirectTo: '/page1'
    });
}]);
