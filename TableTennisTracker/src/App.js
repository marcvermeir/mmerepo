
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        {this.props.children}
      </div>
    );
  },
});

module.exports.App = App;
