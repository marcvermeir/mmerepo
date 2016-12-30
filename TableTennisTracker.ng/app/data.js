 app.factory("Data", ['$http', '$location',
    function ($http, $q, $location) {

        var serviceBase = '';

        var obj = {};

        obj.get = function (q) {
            var serviceUrl = serviceBase + q;

            return $http.get(serviceUrl)
                .then(function (results) {
                    return results.data;
                })
                .catch(function (results) {
                    console.log('Error in http post ' + q + ' //' + results.data);
                    return null;
                });
        };

        return obj;
}]);
