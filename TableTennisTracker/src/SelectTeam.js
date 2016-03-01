
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Select = require('react-select');

var TeamOverview = require('./TeamOverview.js').TeamOverview;

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
  { value: "12", label: "Week 12" }    
];

//

var SelectTeam = React.createClass({

  getTeams: function() {
    return ttteams;
  },

  getDivisions: function() {
    return ttdivisions;
  },

  getWeeks: function() {
    return ttweeks;
  },

  teamChanged: function(value) {
    console.log(value);
  },

  divisionChanged: function(value) {
    console.log(value);
  },  

  weekChanged: function(value) {
    console.log(value);
  },  

  render: function() {
    var that = this;

    var defaultTeam = ttteams[0].value;
    var defaultDivision = ttdivisions[0].value;
    var defaultWeek = ttweeks[0].value;

    return ( 
      <div className="container">

        <div className="row">
          <Select name="ttteam"
                  value={defaultTeam}
                  options={that.getTeams()}
                  placeholder="Selecteer een team"
                  className="centered-select"
                  onChange={that.teamChanged} />
        </div>
        <div className="row">
          <Select name="ttdivision"
                  value={defaultDivision}
                  options={that.getDivisions()}
                  placeholder="Selecteer een divisie"
                  className="centered-select"
                  onChange={that.divisionChanged} />
        </div>
        <div className="row">
          <Select name="ttweek"
                  value={defaultWeek}
                  options={that.getWeeks()}
                  placeholder="Selecteer een week"
                  className="centered-select"
                  onChange={that.weekChanged} />
        </div>

        <div className="row">
          <Link to={"TeamOverview/0043225712"} className="btn btn-primary centered-select">Go!</Link>
        </div>
      </div>
      );
  },
});

module.exports.SelectTeam = SelectTeam;
