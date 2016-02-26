
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Navbar = require('./Navbar.js').Navbar;

var App = React.createClass({
  render: function() {
    return ( 
      <div className="container-fluid ttapp">
        <Navbar />
        {this.props.children}
      </div>
    );
  },
});

module.exports.App = App;
