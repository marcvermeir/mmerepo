
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Select = require('react-select');

var $ = require('jquery');

/* var xml2json = require('jquery-xml2json').xml2json; */
/* var JQuerySoap = require('./jquery.soap.js'); */

var TeamOverview = require('./TeamOverview.js').TeamOverview;

var SelectTeam = React.createClass({

  /*
  getTeams: function() {

    return ttteams;
  },
  */

  /*
  getDivisions: function() {

    $.soap({
        url: 'http://api.vttl.be/0.7/index.php?s=vttl',
        type: 'POST',
        method: 'GetDivisions',
        appendMethodToURL: false,
        soap12: true,
        context: document.body,
        data: {
        },

        success: function (soapResponse) {

        },
        error: function (SOAPResponse) {
        }
    });

    return ttdivisions;
  },
  */

  /*
  getWeeks: function() {
    return ttweeks;
  },
  */

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
