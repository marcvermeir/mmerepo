(function () {
    "use strict";

    var ParkingDetailsController = function ($scope, $routeParams, parkingService) {

        $scope.parking;

        var onParkingDownloaded = function (response) {
            $scope.parking = response;

            //
            var g = new JustGage({
                id: "gauge",
                value: $scope.parking.totalCapacity - $scope.parking.availableCapacity,
                min: 0,
                max: $scope.parking.totalCapacity,
                title: $scope.parking.description
               
            });
        };

        var onParkingDownloadedError = function (err) { };

        parkingService.getById($routeParams.id).then(onParkingDownloaded, onParkingDownloadedError);
    };

    angular.module("app").controller("ParkingDetailsController", ParkingDetailsController);


})();