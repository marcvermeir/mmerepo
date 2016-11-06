
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Select = require('react-select');

<<<<<<< HEAD
var $ = require('jquery');
var xml2json = require('jquery-xml2json').xml2json;
var JQuerySoap = require('./jquery.soap.js');
=======
>>>>>>> 5dba2e75405cebffa22a5eb27a6307922b2ab28f

var TeamOverview = require('./TeamOverview.js').TeamOverview;

var SelectTeam = React.createClass({

<<<<<<< HEAD
  getTeams: function() {



    return ttteams;
  },

  getDivisions: function() {

    $.soap({
        /* url: 'http://api.vttl.be/0.7/?wsdl', */
        url: 'http://api.vttl.be/0.7/index.php?s=vttl',
        type: 'POST',
        method: 'GetDivisions',
        appendMethodToURL: false,
        soap12: true,
        context: document.body,
        data: {
        },

        success: function (soapResponse) {
            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            // or soapResponse.toXML() to get XML DOM

            console.log(soapResponse);

            //todo: check : https://www.npmjs.com/package/xml2js


        },
        error: function (SOAPResponse) {
            // show error
            console.log(SOAPResponse);
        }
    });

    return ttdivisions;
  },

  getWeeks: function() {

   /* var params = new SOAPClientParameters(); */

    /*
    var url = 'http://api.vttl.be/0.7/?wsdl';
    // var args = {name: 'value'};
    soap.createClient(url, function(err, client) {
        client.GetSeasons(null, function(err, result) {
            console.log(result);
        });
    });
    
    */
  
    return ttweeks;
  },

=======
>>>>>>> 5dba2e75405cebffa22a5eb27a6307922b2ab28f
  teamChanged: function(value) {
    console.log(value);
  },

  divisionChanged: function(value) {
    console.log(value);
  },  

  weekChanged: function(value) {
    console.log(value);
  },  

  componentDidMount: function() {
    this.refs.ttteamSelect.focus();
  },

  render: function() {
    var that = this;

    var defaultTeam = this.props.teams[0].value;
    var defaultDivision = this.props.divisions[1].value;
    var defaultWeek = this.props.weeks[0].value;

    return ( 
      <div className="container">

        <div className="row">
          <Select name="ttteam"
                  ref="ttteamSelect"
                  value={defaultTeam}
                  options={that.props.teams}
                  placeholder="Selecteer een team"
                  className="centered-select"
                  onChange={that.teamChanged} />
        </div>
        <div className="row">
          <Select name="ttdivision"
                  ref="ttdivisionSelect"
                  value={defaultDivision}
                  options={that.props.divisions}
                  placeholder="Selecteer een divisie"
                  className="centered-select"
                  onChange={that.divisionChanged} />
        </div>
        <div className="row">
          <Select name="ttweek"
                  ref="ttweekSelect"
                  value={defaultWeek}
                  options={that.props.weeks}
                  placeholder="Selecteer een week"
                  className="centered-select"
                  onChange={that.weekChanged} />
        </div>

        <div className="row">
          <Link to={"TeamOverview/0043225712"} className="btn btn-primary centered-select">Zoeken</Link>
        </div>
      </div>
      );
  },
});

module.exports.SelectTeam = SelectTeam;
