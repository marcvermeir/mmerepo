(function () {
    "use strict";

    var ParkingOverviewController = function ($scope, $http, $interval, $log, parkingService, $location) {
        // 0. private vars
        var url = "http://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json";

        // 1. scope vars --> views
        $scope.parkings; // = undefined
        $scope.filterProperty = 'description';
        $scope.filter = ''; // default = show all


        // 2. filters and events
        $scope.descriptionFilter = function (p) {
            if ($scope.filter === '') return true;
            // sint in description ?
            return p.description.contains($scope.filter, false);
        }

        $scope.getStatus = function (p) {
            if (p.availableCapacity === 0){
                return "full";
            }
            else if (!p.known) {
                return "unknown";
            }
            else if (p.availableCapacity / p.totalCapacity < 0.3) {
                return "warning";
            }
                
        }

        $scope.navigate = function (p) {
            $location.path("/details/" + p.description);
        };

        // 3. callback methods
        var onParkingDataDownloaded = function (response) {
            $scope.parkings = response;
  
        };
        var onParkingDataDownloadedError = function (err) { };

        // 4. async calls
        var loadData = function () {
            // $scope.parkings = null;
            // $http.get(url).then(onParkingDataDownloaded, onParkingDataDownloadedError);
            parkingService.get().then(onParkingDataDownloaded, onParkingDataDownloadedError);
        }

        loadData();
        // reload aka refresh the data each 5 seconds :
        $interval(loadData, 5000);

    };

    angular.module("app").controller("ParkingOverviewController", ParkingOverviewController);

})();