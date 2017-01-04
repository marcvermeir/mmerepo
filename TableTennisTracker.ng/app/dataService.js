 app.factory("DataService", ['$http', '$location',
    function ($http, $q, $location) {

        //TODO: >> 'constants' ?!
        var URL = 'http://api.vttl.be/0.7/index.php?s=vttl';
        var WSDL = 'http://api.vttl.be/0.7/?wsdl';
        var NAMESPACEURL = 'http://api.frenoy.net/TabTAPI';

        var obj = {};

        /*
        var ttteams = [
            { value: "0",    label: "Alle" },
            { value: "287",  label: "A000 - Individueel Antwerpen" },
            { value: "34",   label: "A003 - KTTC Salamander Mechelen" },
            { value: "187",  label: "A008 - TTC Ekerse" }    
        ];
        */

        /*
        var ttdivisions = [
            { value: "2378", label: "Super Afdeling - Heren" },
            { value: "2257", label: "Afdeling 1A - Nationaal - Heren" },
            { value: "2258", label: "Afdeling 1B - Nationaal - Heren" },
            { value: "2259", label: "Afdeling 2A - Nationaal - Heren" }
        ];
        */

        obj.getTeams = function(season) {

            var result = {};

            $.soap({ url: URL,
                        type: 'POST',
                        method : 'GetClubs',
                        namespaceQualifier: '',
                        namespaceURL : NAMESPACEURL,   
                        noPrefix : true,
                        elementName : 'GetClubs',
                        appendMethodToURL: false,
                        soap12: false,
                        context: document.body,
                        data: { Season : season },
                        success: function (SOAPResponse) {
                            var json = SOAPResponse.toJSON();
                            if (json) {
                                var count = parseInt(json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubCount']);
                                var entries = json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubEntries'];

                                result = { 'Count' : count, 'Entries' : entries };
                            }
                        },
                        error: function (SOAPResponse) {
                            //TODO: error handling ?!
                            var json = SOAPResponse.toJSON();
                            alert(json);
                        }
                    });

            return result;
        };

        obj.getDivisions = function(season) {

            var result = {};

            $.soap({ url: URL,
                        type: 'POST',
                        method : 'GetDivisions',
                        namespaceQualifier: '',
                        namespaceURL : NAMESPACEURL,   
                        noPrefix : true,
                        elementName : 'GetDivisions',
                        appendMethodToURL: false,
                        soap12: false,
                        context: document.body,
                        data: { Season : season },
                        success: function (SOAPResponse) {
                            var json = SOAPResponse.toJSON();
                            if (json) {
                                var count = parseInt(json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetDivisionsResponse']['ns1:DivisionCount']);
                                var entries = json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetDivisionsResponse']['ns1:DivisionEntries'];

                                result = { 'Count' : count, 'Entries' : entries };
                            }                            
                        },
                        error: function (SOAPResponse) {
                            //TODO: error handling ?!
                            var json = SOAPResponse.toJSON();
                            alert(json);
                        }
                    });

            return result;
        };

        return obj;
}]);
