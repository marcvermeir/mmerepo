var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      title: 'Criteria', 
      templateUrl: 'partials/Criteria.html',
      controller: 'criteriaCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    