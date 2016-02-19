
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var TeamOverview = require('./TeamOverview.js').TeamOverview;

var SelectTeam = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        <h3>Select Team</h3>

        <Link to={"TeamOverview/0043225712"}>Go</Link>
      </div>
    );
  },
});

module.exports.SelectTeam = SelectTeam;
