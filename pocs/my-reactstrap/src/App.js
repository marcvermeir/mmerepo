import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import WatchlistRoute from './components/WatchlistRoute';

import './App.css';

export default class App extends Component {
  static displayName = App.name;

  render () {

    //TODO: ??? quid adding React.Strict ... ???

    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/watchlist' component={WatchlistRoute} />
      </Layout>
    );
  }
}
