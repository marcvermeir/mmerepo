
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;

var App = require('./App.js').App;
var FilterMatches = require('./FilterMatches.js').FilterMatches;
var Matches = require('./Matches.js').Matches;

var Home = React.createClass({
  render: function() {
      return (
          <div>
            <h3 className="text-success">TT Tracker</h3>
            <FilterMatches />
          </div>
        );
    },
});

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="Matches" component={Matches} />
  </Router>, 
  document.getElementById('root')
);