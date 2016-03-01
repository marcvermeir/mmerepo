
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        <h2 className="text-info"><strong>Table Tennis Tracker</strong></h2>
      </div>
    );
  },
});

module.exports.Navbar = Navbar;
