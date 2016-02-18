
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Matches = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        <h3>Matches</h3>

        <Link to="/">Home</Link>
      </div>
    );
  },
});

module.exports.Matches = Matches;
