
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var GameDetail = require('./GameDetail.js').GameDetail;

var GameDetail = React.createClass({
  render: function() {
    return ( 
      <div className="container">
        <h3>Game Detail {this.props.params.id}</h3>

      
        <Link to={"TeamOverview/0043225712"}>Back</Link>
        <br/>
        <Link to={"/"}>Home</Link>
      </div>
    );
  },
});

module.exports.GameDetail = GameDetail;
