import React from 'react';
import axios from 'axios';
import Watchlist from './Watchlist';

export default class WatchlistContainer extends React.Component {
  static displayName = WatchlistContainer.name;

  state = {
    users: []
  };

  fetchWatchlist() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('...', res);

        const users = res.data || [];

        console.log(users)

        this.setState({ users });
      })
      .catch((error) => {
        console.log(error)
      })
  };

  componentDidMount() {

    //TODO: refactor the following into a 'MoviesService' ?
    //TODO: refactor the following into an ASYNC implementation ?
    this.fetchWatchlist();

    /*
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;

        console.log(users)

        this.setState({ users });
      })
      .catch((error) => {
        console.log(error)
      })
      */
  }

  render() {
    const { users } = this.state;

    return <Watchlist users={users} />
  }
}


/*
import React, { Component } from 'react';

export class FetchData extends Component {
  // static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
*/