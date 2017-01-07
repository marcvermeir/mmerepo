app.controller('criteriaCtrl', function($scope, $modal, $filter, $location, VTTLAPI) {

    $scope.criteria = { selectedTeam: '', selectedDivision: '', selectedWeek: '' };

    //TODO: define 'season' parameter :
    var season = '16';

    /* var ttteams = [
      { value: "0",    label: "Alle" },
      { value: "287",  label: "A000 - Individueel Antwerpen" },
      { value: "34",   label: "A003 - KTTC Salamander Mechelen" },
      { value: "187",  label: "A008 - TTC Ekerse" }     ]; */

    /* var ttdivisions = [
      { value: "2378", label: "Super Afdeling - Heren" }, ]; */

    $scope.fetchTeams = function(season) {
        'use strict';

        /*
        var URL = 'http://api.vttl.be/0.7/index.php?s=vttl';
        var WSDL = 'http://api.vttl.be/0.7/?wsdl';
        var NAMESPACEURL = 'http://api.frenoy.net/TabTAPI';
        */

        $.soap({
            url: VTTLAPI.URL,
            type: 'POST',
            method: 'GetClubs',
            namespaceQualifier: '',
            namespaceURL: VTTLAPI.NAMESPACEURL,
            noPrefix: true,
            elementName: 'GetClubs',
            appendMethodToURL: false,
            soap12: false,
            context: document.body,
            data: {
                Season: season,
            },
            success: function(SOAPResponse) {
                var result = [];
                var json = SOAPResponse.toJSON();
                if (json) {
                    var count = parseInt(json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubCount']);
                    var entries = json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubEntries'];

                    result = entries.map(function(entry) {
                        var ui = entry['ns1:UniqueIndex'];
                        var ln = entry['ns1:LongName'];
                        return { 'value': ui, 'label': ui + ' - ' + ln };
                    });
                };

                $scope.ttteams = result;
                $scope.$apply();
            },
            error: function(SOAPResponse) {
                //TODO: implement error handling ..
            }
        });
    };

    $scope.fetchDivisions = function(season) {
        'use strict';

        $.soap({
            url: VTTLAPI.URL,
            type: 'POST',
            method: 'GetDivisions',
            namespaceQualifier: '',
            namespaceURL: VTTLAPI.NAMESPACEURL,
            noPrefix: true,
            elementName: 'GetDivisions',
            appendMethodToURL: false,
            soap12: false,
            context: document.body,
            data: {
                Season: season,
            },
            success: function(SOAPResponse) {
                var result = [];
                var json = SOAPResponse.toJSON();
                if (json) {
                    var count = parseInt(json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetDivisionsResponse']['ns1:DivisionCount']);
                    var entries = json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetDivisionsResponse']['ns1:DivisionEntries'];

                    result = entries.map(function(entry) {
                        var di = entry['ns1:DivisionId'];
                        var dn = entry['ns1:DivisionName'];
                        return { 'value': di, 'label': di + ' - ' + dn };
                    });
                };

                $scope.ttdivisions = result;
                $scope.$apply();
            },
            error: function(SOAPResponse) {
                //TODO: implement error handling ..
            }
        });
    };

    $scope.fetchWeeks = function() {
        var ttweeks = [
            { value: "1", label: "Week 1" },
            { value: "2", label: "Week 2" },
            { value: "3", label: "Week 3" },
            { value: "4", label: "Week 4" },
            { value: "5", label: "Week 5" },
            { value: "6", label: "Week 6" },
            { value: "7", label: "Week 7" },
            { value: "8", label: "Week 8" },
            { value: "9", label: "Week 9" },
            { value: "10", label: "Week 10" },
            { value: "11", label: "Week 11" },
            { value: "12", label: "Week 12" },
            { value: "13", label: "Week 13" },
            { value: "14", label: "Week 14" },
            { value: "15", label: "Week 15" },
            { value: "16", label: "Week 16" }
        ];

        $scope.ttweeks = ttweeks;
    };

    $scope.fetchDivisions(season);
    $scope.fetchTeams(season);
    $scope.fetchWeeks();

    $scope.go = function() {
        $location.path('/matches');
    };
});
