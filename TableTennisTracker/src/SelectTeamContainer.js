
var React = require('react');
var ReactDOM = require('react-dom');

var $ = require('jquery');

/* var x2js = require('X2JS').X2JS; */
/* var JQueryXML2JSON = require('./jquery.xml2json.js').xml2json; */
var X2J = require('./xmlToJSON.js');

var JQuerySoap = require('./jquery.soap.js');

var SelectTeam = require('./SelectTeam.js').SelectTeam;

//
var ttteams = [
   { value: "0",    label: "Alle" }
 , { value: "287",  label: "A000 - Individueel Antwerpen" }
 , { value: "34",   label: "A003 - KTTC Salamander Mechelen" }
 , { value: "187",  label: "A008 - TTC Ekerse" }    
];

var ttdivisions = [
  { value: "2378", label: "Super Afdeling - Heren" },
  { value: "2257", label: "Afdeling 1A - Nationaal - Heren" },
  { value: "2258", label: "Afdeling 1B - Nationaal - Heren" },
  { value: "2259", label: "Afdeling 2A - Nationaal - Heren" }
];

var ttclubteams = [
{ value: "9999", label: "dummy clubteam" },
];

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
//

var SelectTeamContainer = React.createClass({

  statics : {
    URL : 'http://api.vttl.be/0.7/index.php?s=vttl',
    WSDL : 'http://api.vttl.be/0.7/?wsdl',
    NAMESPACEURL : 'http://api.frenoy.net/TabTAPI',
  },

  getTeams: function() {

    $.soap({
        url: SelectTeamContainer.URL,
        type: 'POST',
        method : 'GetClubs',
        namespaceQualifier: '',
        namespaceURL : SelectTeamContainer.NAMESPACEURL,   
        noPrefix : true,
        elementName : 'GetClubs',
        appendMethodToURL: false,
        soap12: false,
        context: document.body,
        data: {
          Season : "16",
        },

        success: function (soapResponse) {
            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            // or soapResponse.toXML() to get XML DOM

            /* console.log(soapResponse.toXML()); */
            console.log(X2J.parseString(soapResponse.toString()))

            /* console.log(soapResponse.toXML()); */
            /* console.log(soapResponse.toJSON()); */
            /* var json = $.xml2json(soapResponse);


            /* console.log(x2js.toJSON(soapResponse));*/
            /* console.log($.xml2json(soapResponse)); */

            /*
            var xjs = new X2JS();
            var jsn = xjs.xml_str2json(soapResponse.toXML());
            console.log(jsn);
            */

        },
        error: function (SOAPResponse) {
            // show error
            alert(SOAPResponse);
        }
    });

    return ttteams;
  },

  getDivisions: function() {

    $.soap({
        url: SelectTeamContainer.URL,
        type: 'POST',
        method : 'GetDivisions',
        namespaceQualifier: '',
        namespaceURL : SelectTeamContainer.NAMESPACEURL,   
        noPrefix : true,
        elementName : 'GetDivisions',
        appendMethodToURL: false,
        soap12: false,
        context: document.body,
        data: {
          Season : "16",
        },

        success: function (soapResponse) {
            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            // or soapResponse.toXML() to get XML DOM

        },
        error: function (SOAPResponse) {
            // show error
            alert(SOAPResponse);
        }
    });

    return ttdivisions;
  },

  getClubTeams: function() {

    $.soap({
        /* url: 'http://api.vttl.be/0.7/?wsdl', */
        url: 'http://api.vttl.be/0.7/index.php?s=vttl',
        type: 'POST',
        method : 'GetClubTeams',
        namespaceQualifier: '',
        namespaceURL : 'http://api.frenoy.net/TabTAPI',   
        noPrefix : true,
        elementName : 'GetClubTeams',
        appendMethodToURL: false,
        soap12: false,
        context: document.body,
        data: {
          Club : "A008",
          Season : "16",
        },

        success: function (soapResponse) {
            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            // or soapResponse.toXML() to get XML DOM

            // console.log(soapResponse);
            /* console.log(soapResponse.toXML()); */
            /* console.log(soapResponse.toJSON()); */
            /* console.log(x2js.toJSON(soapResponse));*/
            /* console.log($.xml2json(soapResponse)); */
            console.log(SOAPResponse.toXML());

        },
        error: function (SOAPResponse) {
            // show error
            console.log(SOAPResponse.toXML());
        }
    });
    return ttclubteams;
  },

  getWeeks: function() {

    return ttweeks;
  },

  render: function() {
    var that = this;

    /* .. */
    var ct = that.getClubTeams();

    return (
      <SelectTeam teams={that.getTeams()} divisions={that.getDivisions()} weeks={that.getWeeks()} />
      );
  },
});

module.exports.SelectTeamContainer = SelectTeamContainer;
