(function () {
    "use strict";

    var parkingService = function ($http) {
        // private
        var url = "http://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json";

        var get = function () {
            return $http.get(url).then(function (response) {
                // $log.info("new data available");
                // $log.warn("new data available");
                // $log.error("new data available");

                var parkings = []; // = falsy value
                angular.forEach(response.data, function (p) {
                    var newP = new Parking(
                        p.id,
                        p.name,
                        p.address,
                        p.description,
                        p.parkingStatus.availableCapacity,
                        p.parkingStatus.totalCapacity
                     );

                    parkings.push(newP);
                });
                return parkings;
            });
        };

        var getById = function (id) {
            return $http.get(url).then(function (response) {
                var parking;
                angular.forEach(response.data, function (p) {
                    if (p.description === id) {
                        parking = new Parking(
                            p.id,
                            p.name,
                            p.address,
                            p.description,
                            p.parkingStatus.availableCapacity,
                            p.parkingStatus.totalCapacity
                        );
                    }
                });
                return parking;
            });
        };

        // public
        return {
            get: get,
            getById: getById
        };
    };

    // get

    // getById

    angular.module("app").factory("parkingService", parkingService);

})();