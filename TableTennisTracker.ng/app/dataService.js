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
                        data: { Season : season,
                        },
                        success: function (SOAPResponse) {
                            var json = SOAPResponse.toJSON();
                            if (json) {
                                var clubCount = parseInt(json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubCount']);
                                var clubEntries = json['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetClubsResponse']['ns1:ClubEntries'];

                                result = { 'ClubCount' : clubCount, 'ClubEntries' : clubEntries };
                            }
                        },
                        error: function (SOAPResponse) {
                            //TODO: error handling ?!
                        }
                    });

            return result;
        };

        return obj;
}]);
