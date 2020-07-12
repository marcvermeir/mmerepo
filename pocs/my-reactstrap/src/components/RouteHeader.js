import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RouteHeader extends Component {
  static displayName = RouteHeader.name;

  render () {
    return (
      <>
        <h3>{this.props.title}</h3>
      </>
    );
  }
}

RouteHeader.propTypes = {
    title: PropTypes.string.isRequired
};