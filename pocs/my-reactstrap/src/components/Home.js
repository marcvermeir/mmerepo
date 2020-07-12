import React, { Component } from 'react';
import RouteHeader from './RouteHeader';

export default class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
          <RouteHeader title="Home" />
      </>
    );
  }
}
