
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var TeamOverview = React.createClass({
  render: function() {
    return ( 
      <div className="container ttapp">
        <h3>Team Overview {this.props.params.id}</h3>

        <Link to={"GameDetail/0043225712"}>Detail</Link>
        <br/>
        <Link to="/">Home</Link>
      </div>
    );
  },
});

module.exports.TeamOverview = TeamOverview;
