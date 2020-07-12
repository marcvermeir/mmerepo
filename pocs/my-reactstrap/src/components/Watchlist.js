import React, { Component } from 'react';

export default class Watchlist extends Component {
    static displayName = Watchlist.name;

    render() {
      const { users } = this.props;

      console.log(this.displayName, 'render()', users);

      return (
        <>
        {/*
          <ul>
            { this.props.users.map(user => <li>{ user.name }</li>)}
          </ul>
        */}
        </>
        );
    }
}
