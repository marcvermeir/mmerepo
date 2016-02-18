
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var FilterMatches = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        <h3>Filter Matches</h3>
      </div>
    );
  },
});

module.exports.FilterMatches = FilterMatches;
