
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;

var App = require('./App.js').App;
var SelectTeamContainer = require('./SelectTeamContainer.js').SelectTeamContainer;
var TeamOverview = require('./TeamOverview.js').TeamOverview;
var GameDetail = require('./GameDetail.js').GameDetail;

var Home = React.createClass({
  render: function() {
      return (
          <div className="tthome">
            <SelectTeamContainer />
          </div>
        );
    },
});

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="TeamOverview/:id" component={TeamOverview} />
    <Route path="GameDetail/:id" component={GameDetail} />
  </Router>, 
  document.getElementById('root')
);