(function () {
    "use strict";

    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {

        $routeProvider
            .when("/all", {
                templateUrl: 'views/ParkingOverviewView.html'
            })
            .when("/details/:id", {
                templateUrl: 'views/ParkingDetailsView.html'
            })
            .otherwise({redirectTo: '/all'});
    });

    app.directive("parking", function () {
        return {
            restrict: 'E', /* E = element, A = attribute */
            templateUrl: 'directives/parkingDirective.html'
        };
    });
})();