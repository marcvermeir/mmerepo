import React, { Component } from 'react';
import RouteHeader from './RouteHeader';
import WatchlistContainer from './WatchlistContainer';
import ErrorBoundary from './Errorboundary';

export default class WatchlistRoute extends Component {
  static displayName = WatchlistRoute.name;

  render() {
    return (
      <>
        <RouteHeader title="Watchlist" />

        <ErrorBoundary>
          <WatchlistContainer />
        </ErrorBoundary>
      </>
    );
  }
}